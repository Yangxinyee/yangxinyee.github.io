# Personal Website Repository

This repository contains the source code for my personal website.

## 🌐 Live Website

Visit my personal website: [Charlie Yang - Personal Website](https://yangxinyee.github.io)

## 🌍 Bilingual Support

This website now supports **Chinese and English** language switching! 
- Click the language switcher in the top right corner to switch between languages
- Your language preference is automatically saved
- See [Language Switching Guide](docs/LANGUAGE_SWITCHING.md) for detailed information

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Bilingual Support**: Full Chinese and English language switching
- **Minimal academic design**: A plain, static, single-column researcher homepage with no animations
- **Scholar Snapshot**: Publication and citation data loaded from `data/scholar.json`
- **Performance Optimized**: Fast loading and smooth user experience

## Google Scholar synchronization

The `Update Google Scholar data` GitHub Actions workflow checks the Scholar author profile every Monday through the SerpAPI Google Scholar Author API. To enable it, create a SerpAPI key and add it to this repository as an Actions secret named `SERPAPI_KEY` under **Settings → Secrets and variables → Actions**. The workflow only commits when Scholar data changes.

---

**Charlie Yang** - Software Development Engineer at AWS
