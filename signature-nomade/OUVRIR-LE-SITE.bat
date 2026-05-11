@echo off
chcp 65001 >nul
title Signature Nomade - site HTML
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo Node.js est introuvable. Installez-le depuis https://nodejs.org
  echo puis double-cliquez de nouveau sur ce fichier.
  echo.
  pause
  exit /b 1
)

echo.
echo Dossier du site : %cd%
echo Le serveur va demarrer sur http://localhost:8787
echo Appuyez sur Ctrl+C pour arreter.
echo.

REM Ouvre le navigateur apres un court delai (le temps que le serveur ecoute).
start /min cmd /c "ping 127.0.0.1 -n 3 >nul & start "" http://localhost:8787/"

REM Depuis CE dossier (site-html), sert les fichiers tels quels (--single = spa fallback).
npx --yes serve@14 . -l 8787 -s --no-request-logging

pause
