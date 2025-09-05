# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is meant to be an initially static website project called "Blue's Experiments".
So either choose to start with a full blown next.js project template for later expansion, or start small with static files using modern Typescript and React framework.

The goal of the initial webpage is going to have the following sections:
1. The title, which is "Blue's Experiments"
2. Social icon which only has X for now, linking to https://x.com/crestalblue_
3. Create 26 different tiles with responsive in mind on both desktop and mobile (smaller screen = fewer tiles per row); no scrolling is needed on most screens including mobile - single page should fit all the above (tiles should be responsive to do this)
3.1. Each tile is a different color, the color should be picked using a modern, bright but warm color palette
3.2. The text on each tile is going to be a unique domain ltd, the first letter of the ltd is going to match one of the 26 alpabetically ordered tiles
3.3. For the 26 domain ltds, here are the picks (shown in this order on the tiles): .ai, .build, .cv, .dev, .exchange, .fun, .gg, .how, .it, .jobs, .kids, .link, .meme, .now, .one, .pay, .quest, .run, .so, .trading, .us, .vip, .wtf, .xyz, .you, .zero
3.4. When user hovers over each tile, the tile flips and shows the actual website, e.g. xxx.ai as the title, and a custom description this website; when user clicks the tile after flipping, it opens the website in a new tab; note: leave all titles and descriptions as placeholder text and they will be edited manually; best to allow reading a json or another config file for the website titles and descriptions so we do not need to change code to update these
3.5. On mobile, the hover becomes a long press to flip-and-stay-flipped, until another long press on a different tile unflips the current flipped; when flipped, click to open the website in a new tab
3.6. For the tiles with an empty website title set, it shows a comical question mark when hovered or long pressed
4. For SEO, generate a good title for "Blue's Experiments" and a good description describing this fun collection of Blue's picks for Web3 goodies.

## Development Guide

Principles of development
1. Use small commits, with one commit a major feature
2. Make sure page builds at the end
3. Page needs to be desktop and mobile responsive
4. Optimize for page loading and other good SEO optimizations
5. Make the social icons/links easy to extend later on

Design schema
1. Fun, popping, colorful choices
2. Use a fitting, popular design framework such as Material Design 3

## Architecture Notes

This appears to be intended as a web application project, likely using:
- Next.js (based on .gitignore configuration)
- Node.js ecosystem
- Modern JavaScript/TypeScript development practices

The .gitignore includes patterns for:
- Node.js dependencies (/node_modules)
- Next.js build artifacts (/.next/, /out/)
- Environment files (.env*.local, .env)
- TypeScript build info (*.tsbuildinfo)
