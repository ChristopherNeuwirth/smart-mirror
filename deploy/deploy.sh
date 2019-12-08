#!/bin/bash
echo "======================================="
echo "⚙️  Creating ui production build"
printf "=======================================\n\n"

echo "cd ../ui && npm run build -- --prod" | bash

printf "\n=======================================\n"
echo "🧹  Deleting old files on Raspberry Pi"
printf "=======================================\n\n"

ssh pi@raspberrypi-dev.local "cd /var/www/html && sudo rm -r *"
echo "/var/www/html clean"

printf "\n=======================================\n"
echo "📦  Deploy to Rasperry Pi"
printf "=======================================\n\n"

echo 'scp -r ../ui/dist/smart-mirror/* pi@raspberrypi-dev.local:/var/www/html' | bash

printf "\n=======================================\n"
echo "✅  All Done"
printf "=======================================\n\n"