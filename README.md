# Baldwin Terney Consulting — Website

A plain HTML/CSS/JavaScript site for **www.baldwinterneyconsulting.com**, built to run on
GitHub Pages (no build tools, no server, no frameworks — just files).

## What's in here

```
index.html            Home page — hero, three audiences, why us, process, books, contact
services.html          All engagement packages in one page: MSSP Buyers, Critical
                        Infrastructure Operators, MSSP/MDR/XDR Providers, and retainers
about.html              Mark Mattei's bio, career timeline, and published guides
contact.html            Contact details + "before you reach out" checklist
CNAME                    Tells GitHub Pages this site should answer to
                        www.baldwinterneyconsulting.com
assets/css/style.css    All site styling — colors/fonts are CSS variables at the top
assets/js/config.js      Contact email, phone, and nav links — edit this first
assets/js/main.js        Renders the shared header/footer/mobile nav on every page
```

No build step, no npm, no dependencies — it works as-is on GitHub Pages.

## Editing content

Everything is plain HTML — open the file for the page you want to change and edit the
text directly. A few things are centralized so you only edit them once:

- **Contact email &amp; phone** — `assets/js/config.js`, top of the file (`SITE_CONFIG`).
  Every "Email Us" / "Call" link and the footer pull from here automatically.
- **Navigation links** — also in `config.js` (`NAV_LINKS`). Add a page there and it shows
  up in the header nav on every page automatically.
- **Header &amp; footer** — you don't need to touch these. `assets/js/main.js` renders the
  same header and footer on every page from an empty `<header id="site-header"></header>`
  and `<footer id="site-footer"></footer>`. Edit the markup once in `main.js` and every
  page updates.

### Adding a new engagement package

Open `services.html`, find the audience section (`#buyers`, `#critical-infrastructure`,
`#providers`, or `#retainers`), and copy an existing `.package-card` block — the structure
is name / tagline / format / bullet list / CTA button.

### Adding a new page

1. Copy an existing page (e.g. `contact.html`) and rename it.
2. Keep the `<header id="site-header"></header>` / `<footer id="site-footer"></footer>`
   and the two `<script>` tags at the bottom exactly as-is.
3. Add `{ href: "yourpage.html", label: "Your Label" }` to `NAV_LINKS` in
   `assets/js/config.js`.

## Local preview

Because this is a static site, you can preview it by just opening `index.html` in a
browser, or, for the most accurate preview (matches how GitHub Pages serves it), run a
tiny local server from this folder:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000` in your browser.

## Setting up GitHub Pages

1. **Create the repo.**
   - Go to [github.com/new](https://github.com/new).
   - Name it whatever you like — e.g. `baldwinterney-consulting`. (It doesn't need to
     match the domain.)
   - Set it to **Public** (required for free GitHub Pages) and click **Create repository**.
   - Leave "Add a README" unchecked — this folder already has one.

2. **Push this folder to the new repo.**

   This folder is already a local git repository with an initial commit. From inside this
   folder:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

   *(If you'd rather not use git, you can instead go to the repo's page, click
   **Add file → Upload files**, and drag in everything from this folder — just keep the
   `assets` folder structure intact.)*

3. **Turn on Pages.**
   - In the repo, go to **Settings → Pages**.
   - Under **Build and deployment → Source**, choose **Deploy from a branch**.
   - Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
   - GitHub will build the site — this usually takes under a minute. Refresh the Pages
     settings tab and you'll see a green box with your live URL, something like
     `https://YOUR_USERNAME.github.io/YOUR_REPO/`.

4. **Connect www.baldwinterneyconsulting.com.**
   - This folder already includes a `CNAME` file containing
     `www.baldwinterneyconsulting.com`, so GitHub Pages will pick it up automatically
     once it's pushed.
   - At your domain registrar, add these DNS records:
     - Four **A** records for `@` pointing to GitHub Pages' IPs:
       `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     - A **CNAME** record for `www` pointing to `YOUR_USERNAME.github.io`
   - Back in **Settings → Pages**, confirm `www.baldwinterneyconsulting.com` shows in the
     **Custom domain** field (it should already be filled in from the CNAME file) and
     save. DNS changes can take anywhere from a few minutes to 24 hours to propagate.
     Once it's live, check **Enforce HTTPS** in the same settings panel.

That's it — Baldwin Terney Consulting is live.

## Content notes

- Bio, background, and published guides came from the current baldwinterneyconsulting.com
  site and the two *Managed Security Buyer's Guide* titles on Amazon.
- The engagement packages on `services.html` (RFP Readiness Sprint, Proposal &amp; Vendor
  Evaluation Review, OT Security Posture Assessment, etc.) are **drafted, packaged
  offerings** based on the service areas in your brief — not pulled from a pre-existing
  price sheet. Review names, scope bullets, and timelines before publishing, and add real
  pricing if you want it shown (none is listed currently, matching the current live site).
- Phone number and email are wired from the live site's public contact info.
- The "Solution Architecture &amp; Integration Advisory" group (`#integration` on
  `services.html`, fourth card on the homepage) positions Baldwin Terney as an independent
  integrator of specialized security vendors (e.g. firms like Olympus Cyber and Cyber
  Crucible) rather than a reseller or formal partner of any named vendor. If a real
  partner/reseller/referral agreement is signed with any vendor, update that copy to use
  "partner" language and add any required compensation disclosure — check with counsel
  before doing so.
