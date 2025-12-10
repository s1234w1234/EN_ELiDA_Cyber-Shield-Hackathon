# SafeWeb – Multilingual TFGBV Digital Safety Toolkit (with Voice + Email Notify)

This folder contains an **enhanced version** of SafeWeb for the **ELiDA Digital Tool Development Challenge**:

- 🌍 **Three languages**: English, Amharic, Afaan Oromo  
- 🎙️ **Voice support** (speech input + text-to-speech)  
- 📧 **Email notification hook** to ELiDA for each incident (via small backend API)  
- ✅ Detect, Report, Chatbot, Awareness, Safety Plan – all in one app

---

## 1. What’s New Compared to the First Version

1. **Multilingual UI**

   - Language switcher: **English / አማርኛ / Afaan Oromo**
   - All main labels, navigation, descriptions, chatbot welcome, and safety strings are translated.
   - Implementation: `i18n` dictionary in `app.js` and a `lang-select` dropdown.

2. **Voice Support**

   - Uses browser **Web Speech API** (where available).
   - On the **Detect** screen:
     - 🎙 button – speak a message; text is transcribed into the textarea.
     - 🔊 button – reads the analysis summary aloud.
   - On the **Chatbot** screen:
     - 🎙 button – speak your message; it is transcribed into the input.
     - 🔊 button – reads the last bot reply aloud.
   - Uses `speechSynthesis` and `SpeechRecognition` with language set based on the selected UI language.

3. **Email Notification (Backend API)**

   - When a user submits an incident in the **Report** tab:
     - It is stored locally in `localStorage` (for the demo).
     - If the checkbox **“Email ELiDA automatically about this incident”** is checked, the frontend calls `POST /api/incidents`.
   - You can implement `/api/incidents` using a simple Node.js + Express + Nodemailer server (example below) **to actually send emails** to ELiDA.

---

## 2. Frontend – How to Run

### 2.1 Folder Structure

```text
tfgbv_digital_safety_app_multilingual/
├── index.html   # Main SPA page with language switcher
├── styles.css   # Dark, modern card-based UI
├── app.js       # Logic: i18n, detect, report, chatbot, awareness, safety plan, voice
└── README.md    # This documentation
```

### 2.2 Run Locally

1. Unzip the project:

   ```bash
   unzip tfgbv_digital_safety_app_multilingual.zip
   cd tfgbv_digital_safety_app_multilingual
   ```

2. Open `index.html` directly in the browser **or** run a simple static server:

   ```bash
   # Linux / macOS
   python3 -m http.server 8000

   # Windows (PowerShell)
   python -m http.server 8000
   ```

3. Open in your browser:

   ```text
   http://localhost:8000/index.html
   ```

4. Try:
   - Switching **language** (top-right).
   - Using **Detect** (paste text, or use mic).
   - Logging an incident in **Report**.
   - Chatting with the **Chatbot** (type or voice).
   - Reading **Awareness** cards.
   - Creating a **Safety Plan**.

> 🔐 For the demo, **all data stays in the browser** (`localStorage`). Incident emails are sent only if you set up the backend.

---

## 3. Backend – Simple Email API Example (Node.js)

To actually send email notifications to ELiDA, you can use a small Node.js server.

### 3.1 Example Files to Add

Create a new folder, for example:

```text
backend/
├── server.js
└── .env.example
```

**`server.js` example:**

```js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

app.post("/api/incidents", async (req, res) => {
  const incident = req.body || {};
  const to = process.env.ELIDA_EMAIL;
  if (!to) {
    return res.status(500).json({ error: "ELIDA_EMAIL is not configured" });
  }

  const subject = `[SafeWeb] New TFGBV Incident – Case ${incident.caseId || "N/A"}`;
  const textLines = [
    `Case ID: ${incident.caseId}`,
    `Platform: ${incident.platform}`,
    `Type: ${incident.type}`,
    `Title: ${incident.title}`,
    `Description: ${incident.description}`,
    `Date: ${incident.date}`,
    `Severity: ${incident.severity}`,
    `Immediate danger: ${incident.urgency}`,
    `Created At: ${incident.createdAt}`,
    "",
    "This report was sent from the SafeWeb prototype app."
  ];

  try {
    await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to,
      subject,
      text: textLines.join("\n")
    });
    res.json({ ok: true });
  } catch (err) {
    console.error("Error sending incident email:", err);
    res.status(500).json({ error: "Error sending email" });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("SafeWeb backend listening on port", port);
});
```

**`.env.example`**

```env
SMTP_HOST=smtp.yourprovider.org
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password

FROM_EMAIL=your_from_email@domain.org
ELIDA_EMAIL=elida.notifications@domain.org
PORT=4000
```

### 3.2 Running the Backend

1. Inside `backend/`:

   ```bash
   npm init -y
   npm install express cors nodemailer dotenv
   ```

2. Copy `.env.example` → `.env` and fill with your real SMTP + ELiDA email.

3. Start server:

   ```bash
   node server.js
   ```

4. Adjust the frontend (if needed) to use the correct base URL (e.g. `http://localhost:4000/api/incidents`).  
   In `app.js`, modify:

   ```js
   await fetch("/api/incidents", { ... })
   ```

   to:

   ```js
   await fetch("http://localhost:4000/api/incidents", { ... })
   ```

---

## 4. How This Fits the ELiDA Challenge

The challenge calls for **Digital tools that help prevent, detect, and respond to TFGBV**, especially via:

- Mobile apps
- Chatbots
- Reporting systems
- Awareness platforms
- Safety & protection tools

SafeWeb (multilingual version):

1. **Detect** – Demonstrates automatic screening of harmful messages, with simple rule-based logic but extendable to ML.
2. **Report** – Structured incident reporting plus **automatic email notification** to ELiDA (when backend is configured).
3. **Chatbot** – Multilingual supportive chatbot with voice and text.
4. **Awareness** – In-app micro-learning content, ready to extend with local laws and policies.
5. **Safety Plan** – Personal digital safety plan builder, stored locally.

And now:

- **Amharic + Afaan Oromo** support makes it more inclusive for Ethiopian contexts.
- **Voice** support improves accessibility for users who prefer speaking instead of typing.

---

## 5. Data & Privacy (Prototype)

- All incident data and safety plans are stored in the browser’s `localStorage` by default.
- Email notification only happens if backend is configured.
- For a real deployment, you must add:
  - HTTPS (TLS)
  - Strong authentication and authorisation
  - Role-based access to cases
  - Consent, data retention and deletion policies
  - Survivor-centred design for who can see what

---

## 6. Integration Ideas (for your wider systems)

You can:

- Embed `index.html` into your existing **OnePAD** or other HR / case management portals.
- Connect the backend API to:
  - A case management database
  - A dashboard for ELiDA / partner CSOs
  - A notification system (email + SMS)
- Extend i18n to more Ethiopian languages.

---

> **Note on translations:**  
> Amharic and Afaan Oromo strings are intentionally simple and may need review by native speakers for tone and accuracy. You can easily adjust texts inside the `i18n` object in `app.js`.
