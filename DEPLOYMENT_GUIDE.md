# Deploy to Production: Netlify + Render + PlanetScale

Complete step-by-step guide to deploy your Task Manager app online for FREE!

---

## 🎯 What We're Deploying

```
Frontend (React)  →  Netlify
Backend (Express) →  Render  
Database (MySQL)  →  PlanetScale
```

**Total Time:** ~20 minutes  
**Cost:** $0 (completely free!)

---

# Part 1: Deploy Database to PlanetScale (5 minutes)

## Step 1: Create PlanetScale Account

1. Go to [planetscale.com](https://planetscale.com)
2. Click "Sign up"
3. Sign up with GitHub (easiest)
4. Verify your email

---

## Step 2: Create Database

1. Click "Create a database"
2. **Name:** `task-manager`
3. **Region:** Choose closest to you (e.g., `US East` or `EU West`)
4. **Plan:** Hobby (Free)
5. Click "Create database"

Wait 30-60 seconds for database to be ready.

---

## Step 3: Get Connection Details

1. Click on your `task-manager` database
2. Click "Connect"
3. Select "Node.js" from dropdown
4. Click "Create password"
5. **IMPORTANT:** Copy these values NOW (you can't see password again):
   ```
   HOST: aws.connect.psdb.cloud
   USERNAME: something
   PASSWORD: pscale_pw_xxxxx
   DATABASE: task-manager
   ```

6. Keep this tab open or save to a text file!

---

## Step 4: Test Connection (Optional)

You can test the connection using MySQL Workbench:

```
Host: aws.connect.psdb.cloud
Port: 3306
Username: [your username]
Password: [your password]
Database: task-manager
SSL: Required
```

---

# Part 2: Deploy Backend to Render (10 minutes)

## Step 1: Create Render Account

1. Go to [render.com](https://render.com)
2. Click "Get Started"
3. Sign up with GitHub
4. Authorize Render to access your repositories

---

## Step 2: Create Web Service

1. Click "New +" → "Web Service"
2. Find and select your `FullStack-ToDoList` repository
3. Click "Connect"

---

## Step 3: Configure Service

Fill in these settings:

**Name:** `task-manager-backend`

**Region:** Choose closest to you

**Branch:** `main`

**Root Directory:** `backend`

**Runtime:** `Node`

**Build Command:**
```bash
npm install
```

**Start Command:**
```bash
npm start
```

**Instance Type:** `Free`

---

## Step 4: Add Environment Variables

Scroll down to "Environment Variables" section.

Click "Add Environment Variable" for each:

```
DB_HOST=aws.connect.psdb.cloud
DB_USER=[your PlanetScale username]
DB_PASSWORD=[your PlanetScale password]
DB_NAME=task-manager
DB_PORT=3306
PORT=5000
NODE_ENV=production
```

**IMPORTANT:** Use the values you copied from PlanetScale!

---

## Step 5: Deploy

1. Click "Create Web Service"
2. Wait for deployment (3-5 minutes)
3. Watch the logs - you should see:
   ```
   ✅ Database connection established
   ✅ Database synced
   🚀 Server running on http://localhost:5000
   ```

4. You'll get a URL like: `https://task-manager-backend.onrender.com`

---

## Step 6: Test Backend

Open in browser:
```
https://task-manager-backend.onrender.com/api/test
```

Should see:
```json
{
  "message": "Backend is working!",
  "timestamp": "..."
}
```

✅ **Backend is live!**

---

# Part 3: Deploy Frontend to Netlify (5 minutes)

## Step 1: Update Frontend API URL

### Update `frontend/.env.production`:

```env
VITE_API_URL=https://task-manager-backend.onrender.com/api
```

Replace `task-manager-backend` with YOUR actual Render URL!

### Commit Changes:

```powershell
git add frontend/.env.production
git commit -m "Update production API URL"
git push
```

---

## Step 2: Create Netlify Account

1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up"
3. Sign up with GitHub
4. Authorize Netlify

---

## Step 3: Deploy Site

1. Click "Add new site" → "Import an existing project"
2. Click "Deploy with GitHub"
3. Select your `FullStack-ToDoList` repository
4. Configure build settings:

**Branch to deploy:** `main`

**Base directory:** `frontend`

**Build command:** `npm run build`

**Publish directory:** `frontend/dist`

5. Click "Deploy site"

---

## Step 4: Wait for Deployment

- First deploy takes 2-3 minutes
- Watch the deploy logs
- Should see: "Site is live ✨"

---

## Step 5: Get Your URL

You'll get a random URL like:
```
https://silly-name-123456.netlify.app
```

### Customize It:

1. Go to "Site settings"
2. Click "Change site name"
3. Enter: `task-manager-yourname`
4. New URL: `https://task-manager-yourname.netlify.app`

---

## Step 6: Add Environment Variable

1. Go to "Site settings" → "Environment variables"
2. Click "Add a variable"
3. **Key:** `VITE_API_URL`
4. **Value:** `https://task-manager-backend.onrender.com/api`
5. Click "Create variable"

---

## Step 7: Redeploy

1. Go to "Deploys" tab
2. Click "Trigger deploy" → "Deploy site"
3. Wait 1-2 minutes

---

# Part 4: Update Backend CORS

Now that you have your Netlify URL, update backend:

## Step 1: Add Environment Variable in Render

1. Go to your Render dashboard
2. Click on `task-manager-backend`
3. Go to "Environment" tab
4. Click "Add Environment Variable"
5. **Key:** `FRONTEND_URL`
6. **Value:** `https://task-manager-yourname.netlify.app`
7. Click "Save Changes"

Render will auto-redeploy (takes 2-3 minutes).

---

# Part 5: Test Your Live App! 🎉

## ✅ Complete Testing Checklist:

### 1. Open Your Netlify URL
```
https://task-manager-yourname.netlify.app
```

### 2. Test Create Task
- Type a task in the input
- Click "Add"
- Task should appear

### 3. Test Refresh
- Refresh the page (F5)
- Tasks should still be there!
- ✅ This proves it's using the database!

### 4. Test Edit
- Click "Edit" on a task
- Change the text
- Click "Save"
- Should update

### 5. Test Delete
- Click "Delete"
- Task should disappear

### 6. Open in Different Browser
- Open in Chrome, Firefox, or phone
- Tasks should be the same everywhere!

---

# 🐛 Troubleshooting

## Issue: "Network Error" in Frontend

**Check:**
1. Is backend URL correct in `.env.production`?
2. Is `VITE_API_URL` set in Netlify?
3. Did you redeploy after adding env variable?

**Fix:**
```powershell
# Update .env.production with correct URL
git add frontend/.env.production
git commit -m "Fix backend URL"
git push
```

Then trigger redeploy in Netlify.

---

## Issue: "CORS Error"

**Check:**
1. Is `FRONTEND_URL` set in Render?
2. Is the URL exactly right (no trailing slash)?

**Fix:**
1. Go to Render → Environment
2. Update `FRONTEND_URL` to exact Netlify URL
3. Save (auto-redeploys)

---

## Issue: Backend Shows "Application Error"

**Check Render Logs:**
1. Go to Render dashboard
2. Click on your service
3. Click "Logs" tab
4. Look for error messages

**Common Issues:**
- Database credentials wrong
- PlanetScale database not accessible
- Missing environment variables

---

## Issue: "Cannot connect to database"

**Check:**
1. PlanetScale database is running
2. All DB_* variables are correct in Render
3. SSL is enabled in database config

**Test Connection:**
Use MySQL Workbench with PlanetScale credentials to verify database is accessible.

---

## Issue: Render Backend is Slow (First Load)

**This is normal!**
- Free tier sleeps after 15 minutes
- First request takes 30-60 seconds (cold start)
- Subsequent requests are fast

**Solutions:**
1. Use UptimeRobot to ping every 5 minutes (keeps it awake)
2. Upgrade to paid tier ($7/month - no sleep)
3. Accept the cold start (it's free!)

---

# 📊 Your Live Architecture

```
User Browser
     ↓
Netlify CDN (Frontend)
https://task-manager-yourname.netlify.app
     ↓
     ↓ HTTPS API Calls
     ↓
Render (Backend)
https://task-manager-backend.onrender.com
     ↓
     ↓ MySQL Queries (SSL)
     ↓
PlanetScale (Database)
aws.connect.psdb.cloud
```

---

# 🎯 What You Get (Free Tier)

## Netlify:
- ✅ 100GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ Auto-deploy from GitHub
- ✅ HTTPS included
- ✅ Custom domain support

## Render:
- ✅ 750 hours/month (enough for 1 app)
- ✅ Auto-deploy from GitHub
- ✅ HTTPS included
- ⚠️ Sleeps after 15 min inactivity

## PlanetScale:
- ✅ 5GB storage
- ✅ 1 billion row reads/month
- ✅ Automatic backups
- ✅ No sleep
- ✅ Production-ready

---

# 📝 Update Your README

Add this to your `README.md`:

```markdown
## 🌐 Live Demo

**Frontend:** https://task-manager-yourname.netlify.app  
**Backend API:** https://task-manager-backend.onrender.com

## 🚀 Tech Stack

- **Frontend:** React + Vite + Tailwind CSS (Netlify)
- **Backend:** Node.js + Express (Render)
- **Database:** MySQL (PlanetScale)
```

Commit and push:
```powershell
git add README.md
git commit -m "Add live demo links"
git push
```

---

# 🎉 Congratulations!

Your app is now live on the internet!

**Share it:**
- 📱 Add to your portfolio
- 💼 Share on LinkedIn
- 👨‍💻 Add to your resume
- 🌟 Show to potential employers

**Your app is accessible from anywhere in the world!** 🌍

---

# 🚀 Next Steps

1. **Custom Domain** (Optional)
   - Buy domain on Namecheap/Google Domains
   - Add to Netlify (free HTTPS included!)

2. **Monitoring**
   - Set up UptimeRobot to monitor uptime
   - Get alerts if site goes down

3. **Analytics**
   - Add Google Analytics
   - Track user behavior

4. **Enhancements**
   - Add user authentication
   - Add task categories
   - Add due dates
   - Add search functionality

---

**You did it! Your first full-stack app is live!** 🎊
