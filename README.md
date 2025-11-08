# Authentication App – Expo React Native + Firebase

Ky projekt është zhvilluar si pjesë e lëndës **Programimi për Pajisje Mobile** dhe demonstron një sistem të plotë autentifikimi duke përdorur **Firebase Authentication**, **Expo Router** dhe **React Native**.

## ✅ Funksionalitetet Kryesore

### 1. ✅ Regjistrimi i përdoruesit (Sign Up)
- Regjistrimi i përdoruesve përmes **email/password**
- Validim profesional me **RegEx**:
  - Email në format të saktë
  - Password me gjatësi ≥ 8 karaktere, shkronja të mëdha, të vogla, numra dhe simbole
- Ruajtja dhe verifikimi i të dhënave me Firebase Authentication

### 2. ✅ Kyçja e përdoruesit (Login)
- Kyçje me email dhe password
- Identifikimi i rasteve:
  - User nuk ekziston
  - Password i gabuar
  - Forma email-it jo valide
  - Password bosh

### 3. ✅ Autentifikim me Google (Firebase Authentication Provider)
- Login përmes **GoogleAuthProvider**
- Nëse login-i është i suksesshëm, përdoruesi dërgohet te `/userexists`
- Nëse Google login dështon, shfaqen mesazhet përkatëse të gabimit

### 4. ✅ Routing me Expo Router
Aplikacioni përdor `expo-router` për navigim mes faqeve:
- `/register` – faqja kryesore e autentifikimit
- `/userexists` – shfaqet kur përdoruesi ekziston ose kyçet me sukses


### 5. ✅ Redirect automatik
- Nëse përdoruesi është tashmë i kyçur, aplikacioni e ridrejton automatikisht te `/userexists`

---
1. Përdoruesi hap aplikacionin → dërgohet automatikisht te `/register`
2. Nga aty mund të:
   - krijojë llogari (Sign Up)
   - kyçet në llogari (Log In)
   - përdorë Google për t’u kyçur
3. Në varësi të rezultatit:
   - Nëse login është i suksesshëm → `/userexists`
   - Nëse email nuk ekziston → 'error-popup'
   - Nëse password është gabim → shfaqet mesazh gabimi


