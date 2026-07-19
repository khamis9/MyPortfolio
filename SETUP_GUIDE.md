# Your Portfolio — Setup Guide

This is a Next.js site. Projects and skills pull live from your GitHub
(`github.com/khamis9`) automatically — nothing to configure there. Reviews
need a free database (Supabase), set up below.

## 1. Add your photo and CV

Drop two files into the `public/` folder:
- `public/profile.jpg` — your photo
- `public/cv.pdf` — your resume

That's it — the site already links to them. Until you add them, the photo
shows an "HK" placeholder and the CV button will 404.

## 2. Set up Supabase (for live reviews)

1. Go to https://supabase.com and create a free account + new project.
2. Once the project is ready, open the **SQL Editor** and run this:

```sql
create table reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text,
  rating int not null check (rating between 1 and 5),
  message text not null,
  created_at timestamptz not null default now()
);

alter table reviews enable row level security;

-- Anyone can read reviews
create policy "Public read" on reviews
  for select using (true);

-- Anyone can submit a review (this is what makes it "fully automatic")
create policy "Public insert" on reviews
  for insert with check (true);
```

3. Go to **Settings → API** in Supabase. Copy:
   - **Project URL**
   - **anon public** key

4. In this project, copy `.env.local.example` to `.env.local` and paste
   those two values in:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
```

Reviews submitted on the site will now show up instantly for everyone —
no approval step. (Heads up: this also means anyone can post anything.
There's a basic spam trap built in, but if you get spam later, tell me
and I'll add a moderation step or simple CAPTCHA.)

## 3. Set up the "Got an idea?" contact form

Same Supabase project as above. In the **SQL Editor**, run:

```sql
create table inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table inquiries enable row level security;

-- Anyone can submit an inquiry
create policy "Public insert" on inquiries
  for insert with check (true);

-- No public read policy — inquiries are private. View them in the
-- Supabase dashboard's Table Editor (you're authenticated there, so
-- RLS doesn't block you).
```

No new env vars needed — it reuses the same `NEXT_PUBLIC_SUPABASE_URL` and
`NEXT_PUBLIC_SUPABASE_ANON_KEY` from step 2.

## 3. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 4. Deploy it for free (Vercel)

1. Push this project to a GitHub repo.
2. Go to https://vercel.com, sign in with GitHub, click **New Project**,
   and pick the repo.
3. Under **Environment Variables**, add the same two Supabase keys from
   step 2.
4. Click **Deploy**. You'll get a live URL like `your-project.vercel.app`
   within a minute or two.

## 5. Add your custom domain

1. Buy a domain (Namecheap, Google Domains, GoDaddy — usually $10–15/year).
2. In Vercel, go to your project → **Settings → Domains** → add your
   domain.
3. Vercel will show you 1–2 DNS records to add. Add those in your domain
   registrar's DNS settings (usually an "A" or "CNAME" record).
4. Wait a few minutes to a few hours for DNS to propagate — then your
   site is live on your own domain.

## Where things live (for future edits)

- `app/components/Hero.js` — the terminal intro
- `app/components/About.js` — bio + photo
- `app/components/Projects.js` — pulls from GitHub automatically
- `app/components/Skills.js` — pulls from GitHub automatically
- `app/components/Reviews.js` + `ReviewForm.js` — testimonials
- `app/components/Contact.js` — email/phone/GitHub/CV cards
- `app/globals.css` — colors and fonts (all in one place at the top)
