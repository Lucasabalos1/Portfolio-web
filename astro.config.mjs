// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  env:{
    schema:{
      PUBLIC_EMAILJS_SERVICE_ID : envField.string({context: 'client', access: 'public'}),
      PUBLIC_EMAILJS_TEMPLATE_ID :  envField.string({context: 'client', access: 'public'}),
      PUBLIC_EMAILJS_PUBLIC_KEY :  envField.string({context: 'client', access: 'public'}),
    }
  }
});