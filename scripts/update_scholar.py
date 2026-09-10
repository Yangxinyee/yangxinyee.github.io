#!/usr/bin/env python3
"""Refresh the portfolio's Scholar snapshot through SerpAPI's author endpoint."""

from __future__ import annotations

import datetime as dt
import json
import os
import pathlib
import sys
import urllib.parse
import urllib.request


AUTHOR_ID = "xEgmvx4AAAAJ"
ROOT = pathlib.Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "data" / "scholar.json"


def metric_value(table: list[dict], key: str) -> int:
    for row in table:
        value = row.get(key)
        if isinstance(value, dict):
            return int(value.get("all") or 0)
    return 0


def article_link(article: dict) -> str:
    citation_id = article.get("citation_id")
    if citation_id:
        query = urllib.parse.urlencode(
            {
                "view_op": "view_citation",
                "hl": "en",
                "user": AUTHOR_ID,
                "citation_for_view": citation_id,
            }
        )
        return f"https://scholar.google.com/citations?{query}"
    return article.get("link") or f"https://scholar.google.com/citations?user={AUTHOR_ID}&hl=en"


def normalize_article(article: dict) -> dict:
    cited_by = article.get("cited_by") or {}
    return {
        "title": article.get("title") or "Untitled publication",
        "authors": article.get("authors") or "",
        "venue": article.get("publication") or article.get("venue") or "",
        "year": str(article.get("year") or ""),
        "citations": int(cited_by.get("value") or article.get("citations") or 0),
        "link": article_link(article),
    }


def fetch_payload(api_key: str) -> dict:
    params = urllib.parse.urlencode(
        {
            "engine": "google_scholar_author",
            "author_id": AUTHOR_ID,
            "hl": "en",
            "num": 100,
            "sort": "pubdate",
            "api_key": api_key,
        }
    )
    request = urllib.request.Request(
        f"https://serpapi.com/search.json?{params}",
        headers={"User-Agent": "charlie-yang-portfolio-scholar-sync/1.0"},
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        payload = json.load(response)

    if payload.get("error"):
        raise RuntimeError(payload["error"])
    return payload


def main() -> int:
    api_key = os.environ.get("SERPAPI_KEY")
    if not api_key:
        print("SERPAPI_KEY is not configured; Scholar snapshot was not changed.", file=sys.stderr)
        return 2

    payload = fetch_payload(api_key)
    publications = [normalize_article(item) for item in payload.get("articles", [])]
    if not publications:
        raise RuntimeError("SerpAPI returned no publications; refusing to overwrite the snapshot.")

    table = (payload.get("cited_by") or {}).get("table") or []
    result = {
        "profile": f"https://scholar.google.com/citations?user={AUTHOR_ID}&hl=en",
        "authorId": AUTHOR_ID,
        "updatedAt": dt.datetime.now(dt.timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z"),
        "source": "Google Scholar via SerpAPI",
        "metrics": {
            "citations": metric_value(table, "citations"),
            "hIndex": metric_value(table, "h_index"),
            "i10Index": metric_value(table, "i10_index"),
            "publications": len(publications),
        },
        "publications": publications,
    }

    if OUTPUT.exists():
        previous = json.loads(OUTPUT.read_text(encoding="utf-8"))
        comparable_previous = {k: v for k, v in previous.items() if k != "updatedAt"}
        comparable_result = {k: v for k, v in result.items() if k != "updatedAt"}
        if comparable_previous == comparable_result:
            print("Scholar data is already current.")
            return 0

    OUTPUT.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Updated Scholar snapshot with {len(publications)} publications.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
