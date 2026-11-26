// ── ICONS — Google Material Symbols (Rounded), inlined so they work offline ───────
const MI = { "favorite": "<path d=\"M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z\"/>", "directions_run": "<path d=\"M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.17 12 .57-2.5 2.1 2v5c0 .55.45 1 1 1s1-.45 1-1v-5.64c0-.55-.22-1.07-.62-1.45l-1.48-1.41.6-3a7.321 7.321 0 0 0 4.36 2.41c.6.09 1.14-.39 1.14-1 0-.49-.36-.9-.85-.98-1.52-.25-2.78-1.15-3.45-2.33l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L7.21 7.76a2.01 2.01 0 0 0-1.22 1.85v2.37c0 .55.45 1 1 1s1-.45 1-1v-2.4l1.8-.7-1.6 8.1-3.92-.8c-.54-.11-1.07.24-1.18.78V17c-.11.54.24 1.07.78 1.18l4.11.82a2 2 0 0 0 2.34-1.52z\"/>", "menu_book": "<path d=\"M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94.98-.25 2.02-.36 3.02-.36 1.56 0 3.22.26 4.56.92.6.3 1.28.3 1.87 0 1.34-.67 3-.92 4.56-.92 1 0 2.04.11 3.02.36 1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85-1.28-.57-2.82-.79-4.27-.79zM21 17.23c0 .63-.58 1.09-1.2.98-.75-.14-1.53-.2-2.3-.2-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5.92 0 1.83.09 2.7.28.46.1.8.51.8.98v9.47z\"/><path d=\"M13.98 11.01c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.54-.5 3.53-.66 5.36-.45.41.05.71.42.66.83-.05.41-.42.71-.83.66-1.62-.19-3.39-.04-4.73.39-.08.01-.16.03-.23.03zm0 2.66c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.53-.5 3.53-.66 5.36-.45.41.05.71.42.66.83-.05.41-.42.71-.83.66-1.62-.19-3.39-.04-4.73.39a.97.97 0 0 1-.23.03zm0 2.66c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.53-.5 3.53-.66 5.36-.45.41.05.71.42.66.83-.05.41-.42.7-.83.66-1.62-.19-3.39-.04-4.73.39a.97.97 0 0 1-.23.03z\"/>", "water_drop": "<path d=\"M12.66 2.58c-.38-.33-.95-.33-1.33 0C6.45 6.88 4 10.62 4 13.8c0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.18-2.45-6.92-7.34-11.22zM7.83 14c.37 0 .67.26.74.62.41 2.22 2.28 2.98 3.64 2.87.43-.02.79.32.79.75 0 .4-.32.73-.72.75-2.13.13-4.62-1.09-5.19-4.12a.75.75 0 0 1 .74-.87z\"/>", "self_improvement": "<circle cx=\"12\" cy=\"6\" r=\"2\"/><path d=\"M21 14.94c0-.5-.36-.93-.85-.98-1.88-.21-3.49-1.13-4.75-2.63l-1.34-1.6c-.38-.47-.94-.73-1.53-.73h-1.05c-.59 0-1.15.26-1.53.72l-1.34 1.6c-1.25 1.5-2.87 2.42-4.75 2.63-.5.06-.86.49-.86.99 0 .6.53 1.07 1.13 1 2.3-.27 4.32-1.39 5.87-3.19V15l-3.76 1.5c-.65.26-1.16.83-1.23 1.53A1.79 1.79 0 0 0 6.79 20H9v-.5a2.5 2.5 0 0 1 2.5-2.5h3c.28 0 .5.22.5.5s-.22.5-.5.5h-3c-.83 0-1.5.67-1.5 1.5v.5h7.1c.85 0 1.65-.54 1.85-1.37.21-.89-.27-1.76-1.08-2.08L14 15v-2.25c1.56 1.8 3.57 2.91 5.87 3.19.6.06 1.13-.4 1.13-1z\"/>", "draw": "<path d=\"m18.85 10.39 1.06-1.06c.78-.78.78-2.05 0-2.83L18.5 5.09c-.78-.78-2.05-.78-2.83 0l-1.06 1.06 4.24 4.24zm-5.66-2.83-9.05 9.05a.5.5 0 0 0-.14.35v3.54c0 .28.22.5.5.5h3.54c.13 0 .26-.05.35-.15l9.05-9.05-4.25-4.24zM19 17.5c0 2.19-2.54 3.5-5 3.5-.55 0-1-.45-1-1s.45-1 1-1c1.54 0 3-.73 3-1.5 0-.47-.48-.87-1.23-1.2l1.48-1.48c1.07.63 1.75 1.47 1.75 2.68zM4.58 13.35C3.61 12.79 3 12.06 3 11c0-1.8 1.89-2.63 3.56-3.36C7.59 7.18 9 6.56 9 6c0-.41-.78-1-2-1-1.26 0-1.8.61-1.83.64-.35.41-.98.46-1.4.12a.992.992 0 0 1-.15-1.38C3.73 4.24 4.76 3 7 3s4 1.32 4 3c0 1.87-1.93 2.72-3.64 3.47C6.42 9.88 5 10.5 5 11c0 .31.43.6 1.07.86l-1.49 1.49z\"/>", "piano": "<path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 11.5h.25V19h-4.5v-4.5H10c.55 0 1-.45 1-1V5h2v8.5c0 .55.45 1 1 1zM5 5h2v8.5c0 .55.45 1 1 1h.25V19H5V5zm14 14h-3.25v-4.5H16c.55 0 1-.45 1-1V5h2v14z\"/>", "restaurant": "<path d=\"M16 6v6c0 1.1.9 2 2 2h1v7c0 .55.45 1 1 1s1-.45 1-1V3.13c0-.65-.61-1.13-1.24-.98C17.6 2.68 16 4.51 16 6zm-5 3H9V3c0-.55-.45-1-1-1s-1 .45-1 1v6H5V3c0-.55-.45-1-1-1s-1 .45-1 1v6c0 2.21 1.79 4 4 4v8c0 .55.45 1 1 1s1-.45 1-1v-8c2.21 0 4-1.79 4-4V3c0-.55-.45-1-1-1s-1 .45-1 1v6z\"/>", "fitness_center": "<path d=\"m20.57 14.86.72-.72a.996.996 0 0 0 0-1.41l-.02-.02a.996.996 0 0 0-1.41 0L17 15.57 8.43 7l2.86-2.86a.996.996 0 0 0 0-1.41l-.02-.02a.996.996 0 0 0-1.41 0l-.72.72-.72-.72c-.39-.39-1.03-.39-1.42 0L5.57 4.14l-.72-.72a1.02 1.02 0 0 0-1.43 0 1.02 1.02 0 0 0 0 1.43l.72.72L2.71 7a.996.996 0 0 0 0 1.41l.72.72-.72.73a.996.996 0 0 0 0 1.41l.02.02c.39.39 1.02.39 1.41 0L7 8.43 15.57 17l-2.86 2.86a.996.996 0 0 0 0 1.41l.02.02c.39.39 1.02.39 1.41 0l.72-.72.72.72c.39.39 1.02.39 1.41 0l1.43-1.43.72.72c.39.39 1.04.39 1.43 0 .39-.39.39-1.04 0-1.43l-.72-.72L21.29 17a.996.996 0 0 0 0-1.41l-.72-.73z\"/>", "grass": "<path d=\"M15.64 11.02a10.02 10.02 0 0 1 2.56-3.83c.38-.36.04-1-.46-.85-3.32.98-5.75 4.05-5.74 7.69.95-1.28 2.2-2.31 3.64-3.01zm-4.22-2.17a8.556 8.556 0 0 0-2.96-3.87c-.42-.3-.96.19-.72.65C8.54 7.15 9 8.88 9 10.71c0 .21-.03.41-.04.61.43.24.83.52 1.22.82a9.91 9.91 0 0 1 1.24-3.29zM12 20H3c-.55 0-1-.45-1-1s.45-1 1-1h4.75a8.027 8.027 0 0 0-4-5.06.486.486 0 0 1-.26-.44c0-.27.22-.49.49-.5H4c4.42 0 8 3.58 8 8zm8.26-7.06a7.995 7.995 0 0 0-4 5.06H21c.55 0 1 .45 1 1s-.45 1-1 1h-7c0-.68-.07-1.35-.2-2-.15-.72-.38-1.42-.67-2.07A7.97 7.97 0 0 1 20 12h.02a.5.5 0 0 1 .49.5c.01.19-.1.35-.25.44z\"/>", "palette": "<path d=\"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10a2.5 2.5 0 0 0 2.5-2.5c0-.61-.23-1.2-.64-1.67a.528.528 0 0 1-.13-.33c0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm5.5 11c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-3-4c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9zM5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S7.33 13 6.5 13 5 12.33 5 11.5zm6-4c0 .83-.67 1.5-1.5 1.5S8 8.33 8 7.5 8.67 6 9.5 6s1.5.67 1.5 1.5z\"/>", "cleaning_services": "<path d=\"M16 11h-1V4c0-1.66-1.34-3-3-3S9 2.34 9 4v7H8c-2.76 0-5 2.24-5 5v5c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5c0-2.76-2.24-5-5-5zm3 10h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H9v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3v5z\"/>", "medication": "<path d=\"M17 3H7c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zm0 3H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-2.5 9h-1v1c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-1h-1c-.83 0-1.5-.67-1.5-1.5S8.67 12 9.5 12h1v-1c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v1h1c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z\"/>", "wb_sunny": "<path d=\"m6.05 4.14-.39-.39a.993.993 0 0 0-1.4 0l-.01.01a.984.984 0 0 0 0 1.4l.39.39c.39.39 1.01.39 1.4 0l.01-.01a.984.984 0 0 0 0-1.4zM3.01 10.5H1.99c-.55 0-.99.44-.99.99v.01c0 .55.44.99.99.99H3c.56.01 1-.43 1-.98v-.01c0-.56-.44-1-.99-1zm9-9.95H12c-.56 0-1 .44-1 .99v.96c0 .55.44.99.99.99H12c.56.01 1-.43 1-.98v-.97c0-.55-.44-.99-.99-.99zm7.74 3.21c-.39-.39-1.02-.39-1.41-.01l-.39.39a.984.984 0 0 0 0 1.4l.01.01c.39.39 1.02.39 1.4 0l.39-.39a.984.984 0 0 0 0-1.4zm-1.81 15.1.39.39a.996.996 0 1 0 1.41-1.41l-.39-.39a.993.993 0 0 0-1.4 0c-.4.4-.4 1.02-.01 1.41zM20 11.49v.01c0 .55.44.99.99.99H22c.55 0 .99-.44.99-.99v-.01c0-.55-.44-.99-.99-.99h-1.01c-.55 0-.99.44-.99.99zM12 5.5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-.01 16.95H12c.55 0 .99-.44.99-.99v-.96c0-.55-.44-.99-.99-.99h-.01c-.55 0-.99.44-.99.99v.96c0 .55.44.99.99.99zm-7.74-3.21c.39.39 1.02.39 1.41 0l.39-.39a.993.993 0 0 0 0-1.4l-.01-.01a.996.996 0 0 0-1.41 0l-.39.39c-.38.4-.38 1.02.01 1.41z\"/>", "ads_click": "<path d=\"M11.71 17.99A5.993 5.993 0 0 1 6 12c0-3.31 2.69-6 6-6 3.22 0 5.84 2.53 5.99 5.71l-2.1-.63a3.999 3.999 0 1 0-4.81 4.81l.63 2.1zM22 12c0 .3-.01.6-.04.9l-1.97-.59c.01-.1.01-.21.01-.31 0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8c.1 0 .21 0 .31-.01l.59 1.97c-.3.03-.6.04-.9.04-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10zm-3.77 4.26 2.27-.76c.46-.15.45-.81-.01-.95l-7.6-2.28c-.38-.11-.74.24-.62.62l2.28 7.6c.14.47.8.48.95.01l.76-2.27 3.91 3.91c.2.2.51.2.71 0l1.27-1.27c.2-.2.2-.51 0-.71l-3.92-3.9z\"/>", "bedtime": "<path d=\"M11.65 3.46c.27-.71-.36-1.45-1.12-1.34-5.52.8-9.47 6.07-8.34 11.88.78 4.02 4.09 7.21 8.14 7.87 3.74.61 7.16-.87 9.32-3.44.48-.57.19-1.48-.55-1.62-6.02-1.15-9.68-7.54-7.45-13.35z\"/>", "psychology": "<path d=\"M13 8.57a1.43 1.43 0 1 0 0 2.86 1.43 1.43 0 0 0 0-2.86z\"/><path d=\"M13.21 3c-3.84-.11-7 2.87-7.19 6.64L4.1 12.2a.5.5 0 0 0 .4.8H6v3c0 1.1.9 2 2 2h1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-3.68a7.004 7.004 0 0 0 4-6.58c-.14-3.62-3.18-6.63-6.79-6.74zM16 10c0 .13-.01.26-.02.39l.83.66c.08.06.1.16.05.25l-.8 1.39c-.05.09-.16.12-.24.09l-.99-.4c-.21.16-.43.29-.67.39L14 13.83c-.01.1-.1.17-.2.17h-1.6c-.1 0-.18-.07-.2-.17l-.15-1.06c-.25-.1-.47-.23-.68-.39l-.99.4c-.09.03-.2 0-.25-.09l-.8-1.39a.19.19 0 0 1 .05-.25l.84-.66c-.01-.13-.02-.26-.02-.39s.02-.27.04-.39l-.85-.66c-.08-.06-.1-.16-.05-.26l.8-1.38c.05-.09.15-.12.24-.09l1 .4c.2-.15.43-.29.67-.39L12 6.17c.02-.1.1-.17.2-.17h1.6c.1 0 .18.07.2.17l.15 1.06c.24.1.46.23.67.39l1-.4c.09-.03.2 0 .24.09l.8 1.38a.2.2 0 0 1-.05.26l-.85.66c.03.12.04.25.04.39z\"/>", "directions_bike": "<path d=\"M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10 2.4-2.4.8.8c1.06 1.06 2.38 1.78 3.96 2.02.6.09 1.14-.39 1.14-1 0-.49-.37-.91-.85-.99-1.11-.18-2.02-.71-2.75-1.43l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v4c0 .55.45 1 1 1s1-.45 1-1v-4.4c0-.52-.2-1.01-.55-1.38L10.8 10.5zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z\"/>", "headphones": "<path d=\"M3 12v7c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-2c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-7a9 9 0 0 0-18 0z\"/>", "sports_gymnastics": "<path d=\"M4 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 16c-.56 0-1.02-.44-1.05-1l-.45-9L8 11H2c-.55 0-1-.45-1-1s.45-1 1-1h5l6.26-4.47c.42-.3 1-.23 1.34.16.38.45.3 1.12-.18 1.46L11.14 8.5H14l7.09-4.09a.98.98 0 0 1 1.1 1.62L14.5 12l-.45 9c-.03.56-.49 1-1.05 1z\"/>", "local_fire_department": "<path d=\"m12 12.9-2.03 2c-.46.46-.82 1.03-.93 1.67C8.74 18.41 10.18 20 12 20s3.26-1.59 2.96-3.42c-.11-.64-.46-1.22-.93-1.67L12 12.9z\"/><path d=\"M15.56 6.55C14.38 8.02 12 7.19 12 5.3V3.77c0-.8-.89-1.28-1.55-.84C8.12 4.49 4 7.97 4 13c0 2.92 1.56 5.47 3.89 6.86a4.86 4.86 0 0 1-.81-3.68c.19-1.04.75-1.98 1.51-2.72l2.71-2.67c.39-.38 1.01-.38 1.4 0l2.73 2.69c.74.73 1.3 1.65 1.48 2.68.25 1.36-.07 2.64-.77 3.66 1.89-1.15 3.29-3.06 3.71-5.3.61-3.27-.81-6.37-3.22-8.1-.33-.25-.8-.2-1.07.13z\"/>", "calendar_month": "<path d=\"M17 2c-.55 0-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1zm2 18H5V10h14v10zm-8-7c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm-4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm8 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm-4 4c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm-4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm8 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z\"/>", "edit": "<path d=\"M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z\"/>", "delete": "<path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z\"/>", "check": "<path d=\"M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17z\"/>", "check_circle": "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7a.996.996 0 1 1 1.41-1.41L10 14.17l6.88-6.88a.996.996 0 1 1 1.41 1.41l-7.59 7.59a.996.996 0 0 1-1.41 0z\"/>", "close": "<path d=\"M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z\"/>", "info": "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z\"/>", "warning": "<path d=\"M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3zM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z\"/>", "error": "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z\"/>", "emoji_events": "<path d=\"M19 5h-2V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0 0 11 15.9V19H8c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1h-3v-3.1a5.01 5.01 0 0 0 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z\"/>", "school": "<path d=\"M5 13.18v2.81c0 .73.4 1.41 1.04 1.76l5 2.73c.6.33 1.32.33 1.92 0l5-2.73c.64-.35 1.04-1.03 1.04-1.76v-2.81l-6.04 3.3c-.6.33-1.32.33-1.92 0L5 13.18zm6.04-9.66-8.43 4.6c-.69.38-.69 1.38 0 1.76l8.43 4.6c.6.33 1.32.33 1.92 0L21 10.09V16c0 .55.45 1 1 1s1-.45 1-1V9.59c0-.37-.2-.7-.52-.88l-9.52-5.19a2.04 2.04 0 0 0-1.92 0z\"/>", "build": "<path d=\"M12.09 2.91C10.08.9 7.07.49 4.65 1.67L8.28 5.3c.39.39.39 1.02 0 1.41L6.69 8.3c-.39.4-1.02.4-1.41 0L1.65 4.67C.48 7.1.89 10.09 2.9 12.1a6.507 6.507 0 0 0 6.89 1.48l7.96 7.96a2.613 2.613 0 0 0 3.71 0 2.613 2.613 0 0 0 0-3.71L13.54 9.9c.92-2.34.44-5.1-1.45-6.99z\"/>", "rocket_launch": "<path d=\"M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89l-2.26-.97c-.65-.28-.81-1.13-.31-1.63l3.01-3.01c.47-.47 1.15-.68 1.81-.55l1.32.27zm1.49 10.16c.3.3.74.38 1.12.2 1.16-.54 3.65-1.81 5.26-3.42 4.59-4.59 4.63-8.33 4.36-9.93a.979.979 0 0 0-.79-.79c-1.6-.27-5.34-.23-9.93 4.36-1.61 1.61-2.87 4.1-3.42 5.26-.18.38-.09.83.2 1.12l3.2 3.2zm6.97-1.7c-2.29 2.04-5.58 3.44-5.89 3.57l.97 2.26c.28.65 1.13.81 1.63.31l3.01-3.01c.47-.47.68-1.15.55-1.81l-.27-1.32zm-8.71 2.6a3 3 0 0 1-.82 2.71c-.77.77-3.16 1.34-4.71 1.64-.69.13-1.3-.48-1.17-1.17.3-1.55.86-3.94 1.64-4.71a3 3 0 0 1 2.71-.82c1.17.22 2.13 1.18 2.35 2.35zM13 9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z\"/>", "coffee": "<path d=\"M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3zM16 5v3H6V5h10zm2.5 3H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8zM5 19h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1z\"/>", "dark_mode": "<path d=\"M11.01 3.05C6.51 3.54 3 7.36 3 12a9 9 0 0 0 9 9c4.63 0 8.45-3.5 8.95-8 .09-.79-.78-1.42-1.54-.95A5.403 5.403 0 0 1 11.1 7.5c0-1.06.31-2.06.84-2.89.45-.67-.04-1.63-.93-1.56z\"/>", "star": "<path d=\"m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z\"/>", "lightbulb": "<path d=\"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm-3-3h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1s.45 1 1 1zm3-17C7.86 2 4.5 5.36 4.5 9.5c0 3.82 2.66 5.86 3.77 6.5h7.46c1.11-.64 3.77-2.68 3.77-6.5C19.5 5.36 16.14 2 12 2z\"/>", "auto_awesome": "<path d=\"m19.46 8 .79-1.75L22 5.46a.5.5 0 0 0 0-.91l-1.75-.79L19.46 2a.5.5 0 0 0-.91 0l-.79 1.75-1.76.79a.5.5 0 0 0 0 .91l1.75.79.79 1.76c.18.39.74.39.92 0zM11.5 9.5 9.91 6c-.35-.78-1.47-.78-1.82 0L6.5 9.5 3 11.09c-.78.36-.78 1.47 0 1.82l3.5 1.59L8.09 18c.36.78 1.47.78 1.82 0l1.59-3.5 3.5-1.59c.78-.36.78-1.47 0-1.82L11.5 9.5zm7.04 6.5-.79 1.75-1.75.79a.5.5 0 0 0 0 .91l1.75.79.79 1.76a.5.5 0 0 0 .91 0l.79-1.75 1.76-.79a.5.5 0 0 0 0-.91l-1.75-.79-.79-1.76a.508.508 0 0 0-.92 0z\"/>", "hourglass_top": "<path d=\"M8 2c-1.1 0-2 .9-2 2l.01 3.18c0 .53.21 1.03.58 1.41L10 12l-3.41 3.43c-.37.37-.58.88-.58 1.41L6 20c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-3.16c0-.53-.21-1.04-.58-1.41L14 12l3.41-3.4c.38-.38.59-.89.59-1.42V4c0-1.1-.9-2-2-2H8zm8 14.91V19c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-2.09c0-.27.11-.52.29-.71L12 12.5l3.71 3.71c.18.18.29.44.29.7z\"/>", "bolt": "<path d=\"M10.67 21c-.35 0-.62-.31-.57-.66L11 14H7.5c-.88 0-.33-.75-.31-.78 1.26-2.23 3.15-5.53 5.65-9.93a.577.577 0 0 1 1.07.37l-.9 6.34h3.51c.4 0 .62.19.4.66-3.29 5.74-5.2 9.09-5.75 10.05-.1.18-.29.29-.5.29z\"/>", "workspace_premium": "<path d=\"m10.92 12.75 1.08-.82 1.07.81c.39.29.92-.08.78-.55l-.42-1.36 1.2-.95c.37-.28.16-.88-.32-.88h-1.4l-.43-1.34a.5.5 0 0 0-.95 0L11.09 9H9.68c-.47 0-.68.6-.31.89l1.19.95-.42 1.36c-.14.47.39.84.78.55zM6 21.61c0 .68.67 1.16 1.32.95L12 21l4.68 1.56a.998.998 0 0 0 1.32-.95v-6.33A7.96 7.96 0 0 0 20 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.03.76 3.87 2 5.28v6.33zM12 4c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z\"/>", "extension": "<path d=\"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5a2.5 2.5 0 0 0-5 0V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5a2.5 2.5 0 0 0 0-5z\"/>", "calendar_today": "<path d=\"M20 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1H7V2c0-.55-.45-1-1-1s-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 18H5c-.55 0-1-.45-1-1V8h16v12c0 .55-.45 1-1 1z\"/>", "more_horiz": "<path d=\"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"/>", "chevron_left": "<path d=\"M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z\"/>", "chevron_right": "<path d=\"M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z\"/>", "trending_up": "<path d=\"m16.85 6.85 1.44 1.44-4.88 4.88-3.29-3.29a.996.996 0 0 0-1.41 0l-6 6.01a.996.996 0 1 0 1.41 1.41L9.41 12l3.29 3.29c.39.39 1.02.39 1.41 0l5.59-5.58 1.44 1.44a.5.5 0 0 0 .85-.35V6.5a.48.48 0 0 0-.49-.5h-4.29a.5.5 0 0 0-.36.85z\"/>", "trending_down": "<path d=\"m16.85 17.15 1.44-1.44-4.88-4.88-3.29 3.29a.996.996 0 0 1-1.41 0l-6-6.01A.996.996 0 1 1 4.12 6.7L9.41 12l3.29-3.29a.996.996 0 0 1 1.41 0l5.59 5.58 1.44-1.44a.5.5 0 0 1 .85.35v4.29c0 .28-.22.5-.5.5H17.2c-.44.01-.66-.53-.35-.84z\"/>", "radio_button_unchecked": "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/>", "settings": "<path d=\"M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 0 0-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.343 7.343 0 0 0 0 1.35l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68zm-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z\"/>", "celebration": "<path d=\"m3.99 21.29 9.04-3.23c1.38-.49 1.78-2.26.74-3.3l-4.53-4.53c-1.04-1.04-2.8-.64-3.3.74l-3.23 9.04c-.28.8.48 1.56 1.28 1.28zM15.06 12l5.06-5.06a1.25 1.25 0 0 1 1.77 0l.06.06c.29.29.77.29 1.06 0 .29-.29.29-.77 0-1.06l-.06-.06a2.758 2.758 0 0 0-3.89 0L14 10.94c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0zm-5-5.12-.06.06c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l.06-.06a2.758 2.758 0 0 0 0-3.89L11.07 4c-.3-.3-.78-.3-1.07 0-.29.29-.29.77 0 1.06l.06.06c.48.48.48 1.28 0 1.76zm7 5L16 12.94c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l1.06-1.06a1.25 1.25 0 0 1 1.77 0l1.08 1.08c.29.29.77.29 1.06 0 .29-.29.29-.77 0-1.06l-1.08-1.08a2.758 2.758 0 0 0-3.89 0zm-2-6L12 8.94c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l3.06-3.06a2.758 2.758 0 0 0 0-3.89l-1.06-1.06a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.06 1.06c.48.49.48 1.29 0 1.77z\"/>", "schedule": "<path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24a.71.71 0 0 0-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z\"/>", "fact_check": "<path fill-rule=\"evenodd\" d=\"M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H6c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1s-.45 1-1 1zm0-4H6c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1s-.45 1-1 1zm0-4H6c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1s-.45 1-1 1zm9.7 2.12-3.17 3.17c-.39.39-1.03.39-1.42 0l-1.41-1.42a.996.996 0 1 1 1.41-1.41l.71.71 2.47-2.47a.996.996 0 0 1 1.41 0l.01.01c.38.39.38 1.03-.01 1.41z\"/>", "sports_esports": "<path d=\"m21.58 16.09-1.09-7.66A3.996 3.996 0 0 0 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66a2.545 2.545 0 0 0 4.32 2.16L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z\"/>", "play_arrow": "<path d=\"M8 5v14l11-7z\"/>", "pause": "<path d=\"M6 19h4V5H6v14zm8-14v14h4V5h-4z\"/>", "replay": "<path d=\"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z\"/>", "skip_next": "<path d=\"M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z\"/>", "timer": "<path d=\"M9 1h6v2H9zm3 7a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm-1-9h2v4.2l2.6 1.5-1 1.7L11 16.3zM19.03 7.39l1.42-1.42-1.41-1.41-1.42 1.42z\"/>", "add": "<path d=\"M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z\"/>", "remove": "<path d=\"M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z\"/>", "expand_more": "<path d=\"M15.88 9.29 12 13.17 8.12 9.29a.996.996 0 1 0-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41c-.39-.38-1.03-.39-1.42 0z\"/>", "swap_vert": "<path d=\"M16 17.01V11c0-.55-.45-1-1-1s-1 .45-1 1v6.01h-1.79c-.45 0-.67.54-.35.85l2.79 2.78c.2.19.51.19.71 0l2.79-2.78c.32-.31.09-.85-.35-.85H16zM8.65 3.35 5.86 6.14c-.32.31-.1.86.35.86H8v6c0 .55.45 1 1 1s1-.45 1-1V7h1.79c.45 0 .67-.54.35-.85L9.35 3.35a.504.504 0 0 0-.7 0z\"/>", "sync_alt": "<path d=\"M3 7h13V3l5 5-5 5V9H3zM21 15H8v-4l-5 5 5 5v-4h13z\"/>" };
MI.expand_more = '<path d="M15.88 9.29 12 13.17 8.12 9.29a.996.996 0 1 0-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41c-.39-.38-1.03-.39-1.42 0z"/>';
MI.add = '<path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"/>';
MI.remove = '<path d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z"/>';
MI.play_arrow = '<path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"/>';
MI.pause = '<path d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z"/>';
MI.replay = '<path d="M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8zm-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91z"/>';
MI.skip_next = '<path d="m7.58 16.89 5.77-4.07c.56-.4.56-1.24 0-1.63L7.58 7.11C6.91 6.65 6 7.12 6 7.93v8.14c0 .81.91 1.28 1.58.82zM16 7v10c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1s-1 .45-1 1z"/>';
MI.volume_up = '<path d="M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85z"/>';
MI.volume_off = '<path d="M4.34 2.93 2.93 4.34 7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.48-.58.86v.21c0 .62.63 1.06 1.21.83.89-.35 1.7-.85 2.4-1.46l1.45 1.45 1.41-1.41L4.34 2.93zM12 6.41c0-.89-1.08-1.34-1.71-.71L8.53 7.46l3.47 3.47V6.41zm4.5 5.59c0-.42-.07-.82-.19-1.2l1.63-1.63c.36.87.56 1.83.56 2.83 0 2.94-1.82 5.47-4.4 6.5-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85 3.39-1.3 5.79-4.57 5.79-8.4zm-2.5-4.03v.44l2.45 2.45c.03-.28.05-.57.05-.86 0-1.77-1.02-3.29-2.5-4.03z"/>';
MI.timer = '<path d="m14.37 7.29.7-.7c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0l-.7.7C11.99 5.35 10.61 5 9.09 5.22c-3.82.55-6.87 3.6-7.42 7.42C.86 18.23 5.77 23 12 23c6.08 0 11-4.92 11-11 0-1.84-.46-3.58-1.28-5.11zM12 21c-4.97 0-9-4.03-9-9 0-4.66 3.56-8.5 8.12-8.94.39-.04.75.09 1.03.36l6.38 6.38c.28.28.4.65.36 1.04C18.45 15.4 15.6 19 12 21zm1-13h-2v5c0 .55.45 1 1 1s1-.45 1-1V8z"/>';
const MI_OUT = { "check_circle": "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z\"/>", "schedule": "<path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z\"/>", "fact_check": "<g fill-rule=\"evenodd\"><path d=\"M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V5h16v14z\"/><path d=\"M19.41 10.42 17.99 9l-3.17 3.17-1.41-1.42L12 12.16 14.82 15zM5 7h5v2H5zm0 4h5v2H5zm0 4h5v2H5z\"/></g>", "calendar_month": "<path d=\"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z\"/>", "sports_esports": "<path d=\"m21.58 16.09-1.09-7.66A3.996 3.996 0 0 0 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66a2.545 2.545 0 0 0 4.32 2.16L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91zm-2.1.72a.54.54 0 0 1-.42.19c-.15 0-.29-.06-.39-.16L15.83 14H8.17l-2.84 2.84c-.1.1-.24.16-.39.16a.54.54 0 0 1-.42-.19.52.52 0 0 1-.13-.44l1.09-7.66C5.63 7.74 6.48 7 7.47 7h9.06c.99 0 1.84.74 1.98 1.72l1.09 7.66c.03.2-.05.34-.12.43z\"/><path d=\"M9 8H8v2H6v1h2v2h1v-2h2v-1H9z\"/><circle cx=\"17\" cy=\"12\" r=\"1\"/><circle cx=\"15\" cy=\"9\" r=\"1\"/>" };   // outlined variants (bottom-nav inactive state)
// Old emoji icons saved in existing habits → matching Material icon
const EMOJI_ICON = { '❤️': 'favorite', '🏃': 'directions_run', '📚': 'menu_book', '💧': 'water_drop', '🧘': 'self_improvement', '✍️': 'draw', '🎸': 'piano', '🥗': 'restaurant', '💪': 'fitness_center', '🌿': 'grass', '🎨': 'palette', '🧹': 'cleaning_services', '💊': 'medication', '🌅': 'wb_sunny', '🎯': 'ads_click', '🛌': 'bedtime', '🧠': 'psychology', '🚴': 'directions_bike', '🏋️': 'sports_gymnastics', '🎵': 'headphones' };
const iconKey = v => MI[v] ? v : (EMOJI_ICON[v] || null);
// ic('edit') → inline <svg>. size optional (any CSS length).
function ic(name, size, cls) {
  const d = MI[name] || MI.favorite;
  return `<svg class="mi${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" aria-hidden="true"${size ? ` style="width:${size};height:${size}"` : ''}>${d}</svg>`;
}
// A habit's saved icon (new key, or an old emoji) → HTML
function habitIconHTML(v) { const k = iconKey(v); return k ? ic(k) : esc(v || ''); }

// ── CONSTANTS ──────────────────────────────────────────────────────────────────
const EMOJIS = ['favorite', 'directions_run', 'menu_book', 'water_drop', 'self_improvement', 'draw', 'piano', 'restaurant', 'fitness_center', 'grass', 'palette', 'cleaning_services', 'medication', 'wb_sunny', 'ads_click', 'bedtime', 'psychology', 'directions_bike', 'headphones', 'sports_gymnastics'];   // Material icon names
const COLORS = ['#5b84b1', '#6aa6d6', '#4fa3a5', '#6fae8a', '#a3b86a', '#d6b04c', '#e0975a', '#d9776a', '#c9738f', '#a07cc0', '#7f86c8', '#8c7a6b'];
const CNAMES = ['Slate', 'Sky', 'Teal', 'Sage', 'Moss', 'Butter', 'Peach', 'Coral', 'Rose', 'Lilac', 'Periwinkle', 'Mocha'];
const DAY_S = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MON_S = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// ── STATE ──────────────────────────────────────────────────────────────────────
let habits = JSON.parse(localStorage.getItem('ht3_habits') || '[]');
const LEGACY_COLORS = {"#f43f5e": "#c9738f", "#ef4444": "#d9776a", "#f97316": "#e0975a", "#f59e0b": "#d6b04c", "#eab308": "#d6b04c", "#84cc16": "#a3b86a", "#22c55e": "#6fae8a", "#14b8a6": "#4fa3a5", "#06b6d4": "#6aa6d6", "#3b82f6": "#5b84b1", "#6366f1": "#7f86c8", "#a855f7": "#a07cc0", "#8b5cf6": "#a07cc0", "#ec4899": "#c9738f"};
habits.forEach(h => { if (h && h.color && LEGACY_COLORS[h.color.toLowerCase()]) h.color = LEGACY_COLORS[h.color.toLowerCase()]; });
let editId = null;
let deleteId = null;
let openMenuId = null;
let selEmoji = 'favorite';
let selColor = COLORS[0];

// drag state
let dragSrcIdx = null;

let today = new Date();
let todayStr = fmt(today);

function fmt(d) { return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`; }
function p(n) { return String(n).padStart(2, '0'); }
function uid() { return Math.random().toString(36).slice(2, 9); }
function save() { localStorage.setItem('ht3_habits', JSON.stringify(habits)); }
function hexA(hex, a) {
  const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

// ── THEME (System / Light / Dark) ──────────────────────────────────────────────
let themePref = localStorage.getItem('ht3_theme') || 'system';
if (themePref !== 'light' && themePref !== 'dark' && themePref !== 'system') {
  themePref = 'system';
  try { localStorage.setItem('ht3_theme', 'system'); } catch (e) { }
}
const darkMQ = window.matchMedia('(prefers-color-scheme: dark)');
function applyTheme() {
  const resolved = themePref === 'system' ? (darkMQ.matches ? 'dark' : 'light') : themePref;
  document.documentElement.setAttribute('data-theme', resolved);
  const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', bg || '#141218');
  document.querySelectorAll('.seg-btn[data-theme]').forEach(b => b.classList.toggle('sel', b.dataset.theme === themePref));
}
darkMQ.addEventListener?.('change', () => { if (themePref === 'system') applyTheme(); });
document.querySelectorAll('.seg-btn[data-theme]').forEach(b => {
  b.addEventListener('click', () => {
    if (!b.dataset.theme) return;
    themePref = b.dataset.theme;
    localStorage.setItem('ht3_theme', themePref);
    applyTheme();
  });
});
applyTheme();

// ── HEADER DATE ────────────────────────────────────────────────────────────────
function renderHeaderDate() {
  document.getElementById('hDate').textContent =
    `${DAY_S[today.getDay()]}, ${MON_S[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
}
renderHeaderDate();

// ── TODAY BANNER (gap #4) ─────────────────────────────────────────────────────
function updateBanner() {
  const total = habits.length;
  const done = habits.filter(h => h.log?.[todayStr]).length;
  const pct = total ? Math.round(done / total * 100) : 0;
  const accent = habits.find(h => h.color)?.color || '#a07cc0';

  document.getElementById('tbCount').innerHTML = `${done} <span>/ ${total} habit${total !== 1 ? 's' : ''}</span>`;
  document.getElementById('tbBar').style.width = `${pct}%`;
  document.getElementById('tbBar').style.background = accent;
  const tp = document.getElementById('tbPct');
  tp.textContent = `${pct}%`; tp.dataset.suf = '%'; tp.dataset.count = pct; tp.dataset.from = tp._v ?? 0; tp._v = pct; countUps(tp.parentElement, 600);
  document.getElementById('tbPct').style.color = pct === 100 ? '#34d399' : 'var(--text)';
}

// ── WEEK STRIP ─────────────────────────────────────────────────────────────────
function renderWeek() {
  const el = document.getElementById('weekStrip');
  el.innerHTML = '';
  const accent = habits.find(h => h.color)?.color || '#a07cc0';
  document.documentElement.style.setProperty('--t-accent', accent);
  document.documentElement.style.setProperty('--t-accent-bg', hexA(accent, .12));

  const dow = today.getDay();
  const mon = new Date(today); mon.setDate(today.getDate() - ((dow + 6) % 7));

  for (let i = 0; i < 7; i++) {
    const d = new Date(mon); d.setDate(mon.getDate() + i);
    const ds = fmt(d);
    const pill = document.createElement('div');
    pill.className = 'day-pill' + (ds === todayStr ? ' today' : '') + (habits.some(h => h.log?.[ds]) ? ' has-dot' : '');
    pill.innerHTML = `<div class="dp-name">${DAY_S[d.getDay()]}</div><div class="dp-num">${d.getDate()}</div><div class="dp-dot"></div>`;
    el.appendChild(pill);
  }
}

const streakHTML = n => `<span class="flame${n > 0 ? ' on' : ''}">${ic(n > 0 ? 'local_fire_department' : 'radio_button_unchecked')}</span>Streak: ${n}`;

// ── STATS for one habit (gap #2) ───────────────────────────────────────────────
function getStats(habit) {
  // Current month: days 1 → today
  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  let monthTotal = 0, monthDone = 0;
  const cursor = new Date(monthStart);
  while (cursor <= today) { monthTotal++; if (habit.log?.[fmt(cursor)]) monthDone++; cursor.setDate(cursor.getDate() + 1); }

  // Current streak (consecutive days ending today going back)
  let streak = 0;
  const sc = new Date(today);
  while (habit.log?.[fmt(sc)]) { streak++; sc.setDate(sc.getDate() - 1); }

  // Best streak ever
  const allDates = Object.keys(habit.log || {}).sort();
  let best = 0, cur = 0, prev = null;
  allDates.forEach(ds => {
    if (!habit.log[ds]) { cur = 0; prev = null; return; }
    if (!prev) { cur = 1; }
    else {
      const pd = new Date(prev), cd = new Date(ds);
      const diff = (cd - pd) / (1000 * 60 * 60 * 24);
      cur = diff === 1 ? cur + 1 : 1;
    }
    if (cur > best) best = cur;
    prev = ds;
  });

  const pct = monthTotal ? Math.round(monthDone / monthTotal * 100) : 0;
  return { monthDone, monthTotal, pct, streak, best };
}

// ── TRACKER GRID (gap #1: past cells are clickable) ───────────────────────────
function buildTracker(habit) {
  const WEEKS = 18;
  const CELL = 11;
  const GAP = 3;
  const STRIDE = CELL + GAP;
  const color = habit.color || '#a07cc0';

  const todayDow = today.getDay();
  const thisMonday = new Date(today); thisMonday.setDate(today.getDate() - ((todayDow + 6) % 7));
  const firstMon = new Date(thisMonday); firstMon.setDate(thisMonday.getDate() - (WEEKS - 1) * 7);

  const weeks = [];
  for (let w = 0; w < WEEKS; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const day = new Date(firstMon); day.setDate(firstMon.getDate() + w * 7 + d);
      const ds = fmt(day);
      const isFuture = day.getTime() > today.getTime();
      week.push({ ds, day, isFuture, done: !!(habit.log?.[ds]) });
    }
    weeks.push(week);
  }

  const wrap = document.createElement('div'); wrap.className = 'tracker-inner';

  // Day labels
  const lbls = document.createElement('div'); lbls.className = 'tracker-day-labels';
  ['M', '', 'W', '', 'F', '', 'S'].forEach(t => {
    const el = document.createElement('div'); el.className = 'day-label-txt'; el.textContent = t; lbls.appendChild(el);
  });

  const area = document.createElement('div'); area.className = 'tracker-cols-area';

  // Month labels — placed on the column containing the 1st of each month.
  // A leading label for the oldest (partial) month is only shown if there is
  // enough room before the next label, so labels never overlap.
  const mrow = document.createElement('div'); mrow.className = 'tracker-months';
  const labels = [];
  weeks.forEach((week, wi) => {
    const first = week.find(d => d.day.getDate() === 1);
    if (first) labels.push({ wi, day: first.day });
  });
  if (!labels.length || labels[0].wi >= 3) labels.unshift({ wi: 0, day: weeks[0][0].day });
  labels.forEach(l => {
    const lbl = document.createElement('div'); lbl.className = 'month-lbl';
    lbl.style.left = `${l.wi * STRIDE}px`;
    lbl.textContent = `${MON_S[l.day.getMonth()]} '${String(l.day.getFullYear()).slice(2)}`;
    mrow.appendChild(lbl);
  });

  // Cells
  const cols = document.createElement('div'); cols.className = 'tracker-cols';
  const tip = document.getElementById('cellTip');

  weeks.forEach(week => {
    const col = document.createElement('div'); col.className = 'tracker-week';
    week.forEach(day => {
      const cell = document.createElement('div'); cell.className = 't-cell';
      cell.dataset.ds = day.ds;

      if (day.isFuture) {
        cell.classList.add('invisible');
      } else {
        // ALL past cells (including today) are clickable
        cell.classList.add('past-cell');

        if (day.done) {
          cell.style.background = color;
          cell.style.boxShadow = `0 0 4px ${color}66`;
        } else if (day.ds === todayStr) {
          cell.style.background = 'transparent';
          cell.style.border = `1.5px solid ${color}`;
          cell.style.borderRadius = '2px';
          cell.style.boxSizing = 'border-box';
        }

        // Click to toggle any past day
        cell.addEventListener('click', e => {
          e.stopPropagation();
          toggleDay(habit.id, day.ds, cell, color);
        });

        // Tooltip
        cell.addEventListener('mouseenter', e => {
          tip.textContent = `${day.ds}${day.done ? ' · ✓ done' : ''}`;
          tip.classList.add('show');
        });
        cell.addEventListener('mousemove', e => {
          tip.style.left = `${e.clientX + 12}px`;
          tip.style.top = `${e.clientY - 28}px`;
        });
        cell.addEventListener('mouseleave', () => tip.classList.remove('show'));
      }

      col.appendChild(cell);
    });
    cols.appendChild(col);
  });

  area.appendChild(mrow); area.appendChild(cols);
  wrap.appendChild(lbls); wrap.appendChild(area);
  return wrap;
}

// Toggle any past day in-place (no full re-render needed for the grid)
function toggleDay(habitId, ds, cellEl, color) {
  const h = habits.find(h => h.id === habitId);
  if (!h) return;
  if (!h.log) h.log = {};

  // Always resolve the grid cell by date, so the big tick button updates it too
  const cardEl = document.querySelector(`.habit-card[data-id="${habitId}"]`);
  cellEl = cardEl?.querySelector(`.t-cell[data-ds="${ds}"]`) || cellEl || document.createElement('div');

  if (h.log[ds]) {
    delete h.log[ds]; buzz(HAPTIC.undo);
    // revert cell
    cellEl.style.background = '';
    cellEl.style.boxShadow = '';
    if (ds === todayStr) {
      cellEl.style.background = 'transparent';
      cellEl.style.border = `1.5px solid ${color}`;
      cellEl.style.borderRadius = '2px';
      cellEl.style.boxSizing = 'border-box';
    } else {
      cellEl.style.border = '';
    }
  } else {
    h.log[ds] = true; buzz(HAPTIC.check);
    if (ds === todayStr) {
      const cb = cardEl?.querySelector('.habit-check-btn');
      if (cb) { const r = cb.getBoundingClientRect(); burst(r.left + r.width / 2, r.top + r.height / 2, color); }
      if (habits.length && habits.every(x => x.log?.[todayStr])) {
        setTimeout(() => {
          const b = document.getElementById('todayBanner'), r = b.getBoundingClientRect();
          burst(r.left + r.width / 2, r.top + r.height / 2, color, true); buzz(HAPTIC.success);
          b.classList.remove('celebrate'); void b.offsetWidth; b.classList.add('celebrate');
          showToast('All habits done today — amazing!');
        }, 260);
      }
    }
    cellEl.style.background = color;
    cellEl.style.boxShadow = `0 0 4px ${color}66`;
    cellEl.style.border = '';
    // pop animation
    cellEl.style.transform = 'scale(1.4)';
    setTimeout(() => { cellEl.style.transform = ''; }, 150);
  }

  save();

  // Update streak label on the card without full re-render
  const card = document.querySelector(`.habit-card[data-id="${habitId}"]`);
  if (card) {
    const { streak } = getStats(h);
    const sl = card.querySelector('.habit-streak');
    if (sl) sl.innerHTML = streakHTML(streak);
    // today's check button + done class
    if (ds === todayStr) {
      const done = !!(h.log[todayStr]);
      const chk = card.querySelector('.habit-check-btn');
      if (chk) {
        chk.classList.toggle('checked', done);
        chk.style.background = done ? hexA(color, .9) : 'transparent';
      }
      card.classList.toggle('done', done);
    }
  }

  // Update stats boxes
  const sb = document.querySelector(`.habit-card[data-id="${habitId}"] .stats-row`);
  if (sb) updateStatsBoxes(h, sb);

  updateBanner();
  renderWeek();
}

function updateStatsBoxes(habit, container) {
  const { monthDone, monthTotal, pct, streak, best } = getStats(habit);
  const color = habit.color || '#a07cc0';
  const boxes = container.querySelectorAll('.stat-box');
  if (boxes[0]) {
    boxes[0].querySelector('.stat-val').textContent = `${monthDone}/${monthTotal}`;
    boxes[0].querySelector('.stat-bar').style.width = `${pct}%`;
  }
  if (boxes[1]) boxes[1].querySelector('.stat-val').textContent = `${pct}%`;
  if (boxes[2]) boxes[2].querySelector('.stat-val').textContent = best;
  const hp = container.closest('.habit-card')?.querySelector('.hc-prog');
  if (hp) { hp.querySelector('u').style.width = `${pct}%`; hp.querySelector('b').textContent = `${pct}%`; }
}

// ── RENDER HABITS ─────────────────────────────────────────────────────────────
function renderHabits() {
  const list = document.getElementById('habitsList');
  list.innerHTML = '';

  if (!habits.length) {
    list.innerHTML = `<div class="empty"><div class="empty-icon">${ic('grass')}</div><p>No habits yet.<br>Tap "Add New Habit" to begin!</p></div>`;
    updateBanner(); renderWeek(); return;
  }

  habits.forEach((habit, idx) => {
    const done = !!(habit.log?.[todayStr]);
    const { monthDone, monthTotal, pct, streak, best } = getStats(habit);
    const color = habit.color || '#a07cc0';

    const card = document.createElement('div');
    card.className = 'habit-card' + (done ? ' done' : '');
    card.dataset.id = habit.id;
    card.dataset.idx = idx;
    card.style.setProperty('--hc', color);   // card tint follows the habit's own colour

    // ── DRAG & DROP (gap #3) ──────────────────────────────────────────────────
    card.setAttribute('draggable', 'true');

    card.addEventListener('dragstart', e => {
      dragSrcIdx = idx;
      setTimeout(() => card.classList.add('dragging'), 0);
      e.dataTransfer.effectAllowed = 'move';
    });
    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
      document.querySelectorAll('.habit-card').forEach(c => c.classList.remove('drag-over'));
      dragSrcIdx = null;
    });
    card.addEventListener('dragover', e => {
      e.preventDefault(); e.dataTransfer.dropEffect = 'move';
      document.querySelectorAll('.habit-card').forEach(c => c.classList.remove('drag-over'));
      if (dragSrcIdx !== null && dragSrcIdx !== idx) card.classList.add('drag-over');
    });
    card.addEventListener('drop', e => {
      e.preventDefault();
      if (dragSrcIdx === null || dragSrcIdx === idx) return;
      const moved = habits.splice(dragSrcIdx, 1)[0];
      habits.splice(idx, 0, moved);
      save(); renderHabits();
    });

    // Touch drag support
    let touchStartY = 0, touchClone = null, touchOrigIdx = null;
    card.addEventListener('touchstart', e => {
      if (!e.target.closest('.drag-handle')) return;
      touchOrigIdx = idx;
      touchStartY = e.touches[0].clientY;
      card.classList.add('dragging');
    }, { passive: true });
    card.addEventListener('touchmove', e => {
      if (touchOrigIdx === null) return;
      e.preventDefault();
      const y = e.touches[0].clientY;
      const cards = [...document.querySelectorAll('.habit-card')];
      cards.forEach(c => c.classList.remove('drag-over'));
      const target = document.elementFromPoint(e.touches[0].clientX, y)?.closest('.habit-card');
      if (target && target !== card) target.classList.add('drag-over');
    }, { passive: false });
    card.addEventListener('touchend', e => {
      if (touchOrigIdx === null) return;
      card.classList.remove('dragging');
      const cards = [...document.querySelectorAll('.habit-card')];
      cards.forEach(c => c.classList.remove('drag-over'));
      const y = e.changedTouches[0].clientY;
      const target = document.elementFromPoint(e.changedTouches[0].clientX, y)?.closest('.habit-card');
      if (target && target !== card) {
        const targetIdx = parseInt(target.dataset.idx);
        const moved = habits.splice(touchOrigIdx, 1)[0];
        habits.splice(targetIdx, 0, moved);
        save(); renderHabits();
      }
      touchOrigIdx = null;
    });

    // ── HEAD ──
    const head = document.createElement('div'); head.className = 'habit-head';

    // drag handle
    const dh = document.createElement('div'); dh.className = 'drag-handle';
    dh.innerHTML = '<div class="dh-line"></div><div class="dh-line"></div><div class="dh-line"></div>';

    const icon = document.createElement('div'); icon.className = 'habit-icon';
    icon.style.background = hexA(color, .22); icon.style.color = color; icon.innerHTML = habitIconHTML(habit.emoji || 'favorite');

    const mid = document.createElement('div'); mid.className = 'habit-mid';
    mid.innerHTML = `<div class="habit-name"></div>
      <div class="habit-streak">${streakHTML(streak)}</div>`;
    mid.querySelector('.habit-name').textContent = habit.name;

    const chk = document.createElement('div');
    chk.className = 'habit-check-btn' + (done ? ' checked' : '');
    chk.style.background = done ? hexA(color, .9) : 'transparent';
    chk.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10l4.5 4.5 8.5-8.5" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
    chk.addEventListener('click', () => {
      chk.classList.add('pop');
      chk.addEventListener('animationend', () => chk.classList.remove('pop'), { once: true });
      toggleDay(habit.id, todayStr, null, color);
    });

    const menu = document.createElement('div'); menu.className = 'habit-menu-btn';
    menu.innerHTML = ic('more_horiz');
    menu.addEventListener('click', e => { e.stopPropagation(); openMenu(habit.id, menu); });

    head.appendChild(dh); head.appendChild(icon); head.appendChild(mid); head.appendChild(chk); head.appendChild(menu);

    // ── TRACKER ──
    const tw = document.createElement('div'); tw.className = 'tracker-wrap';
    tw.appendChild(buildTracker(habit));

    // ── STATS ROW (gap #2) ────────────────────────────────────────────────────
    const sr = document.createElement('div'); sr.className = 'stats-row';

    function makeBox(val, lbl, barPct) {
      const b = document.createElement('div'); b.className = 'stat-box';
      b.innerHTML = `<div class="stat-val">${val}</div><div class="stat-lbl">${lbl}</div>
        ${barPct !== undefined ? `<div class="stat-bar-wrap"><div class="stat-bar" style="width:${barPct}%;background:${color}"></div></div>` : ''}`;
      return b;
    }
    sr.appendChild(makeBox(`${monthDone}/${monthTotal}`, 'This month', pct));
    sr.appendChild(makeBox(`${pct}%`, 'Completion'));
    sr.appendChild(makeBox(best, 'Best streak'));

    // Status tab (label comes from CSS: "To do" / "Completed") + month progress
    const tab = document.createElement('span'); tab.className = 'hc-tab'; tab.setAttribute('aria-hidden', 'true');
    const prog = document.createElement('div'); prog.className = 'hc-prog';
    prog.innerHTML = `<i><u style="width:${pct}%"></u></i><b>${pct}%</b>`;

    card.appendChild(tab);
    card.appendChild(prog);
    card.appendChild(head);
    card.appendChild(tw);
    card.appendChild(sr);
    list.appendChild(card);
  });

  updateBanner();
  renderWeek();
}

// ── TOGGLE TODAY (main checkbox) ──────────────────────────────────────────────
function toggleHabit(id) {
  const h = habits.find(h => h.id === id);
  if (!h) return;
  if (!h.log) h.log = {};
  if (h.log[todayStr]) { delete h.log[todayStr]; buzz(HAPTIC.undo); } else { h.log[todayStr] = true; buzz(HAPTIC.check); }
  save(); renderHabits();
}

// ── MENU ──────────────────────────────────────────────────────────────────────
function openMenu(id, btn) {
  closeMenu();
  if (openMenuId === id) { openMenuId = null; return; }
  openMenuId = id;
  const dd = document.createElement('div'); dd.className = 'dropdown'; dd.id = 'openDD';
  dd.innerHTML = `<div class="dd-item" data-a="cal">${ic('calendar_month')}Calendar</div>
    <div class="dd-item" data-a="edit">${ic('edit')}Edit</div>
    <div class="dd-item danger" data-a="del">${ic('delete')}Delete</div>`;
  dd.addEventListener('click', e => {
    e.stopPropagation();
    const a = e.target.closest('[data-a]')?.dataset.a; closeMenu();
    if (a === 'cal') openHabitCal(id, btn);
    if (a === 'edit') doEdit(id);
    if (a === 'del') doConfirm(id);
  });
  btn.appendChild(dd);
}
function closeMenu() { document.getElementById('openDD')?.remove(); openMenuId = null; }
document.addEventListener('click', closeMenu);

// ── MODAL ─────────────────────────────────────────────────────────────────────
const overlay = document.getElementById('modalOverlay');
const habitInput = document.getElementById('habitInput');

function openModal(title) {
  document.getElementById('modalTitle').textContent = title;
  renderEmojiPicker(); renderColorPicker();
  overlay.classList.add('open');
  setTimeout(() => habitInput.focus(), 300);
}
function closeModal() {
  overlay.classList.remove('open');
  habitInput.value = ''; editId = null; selEmoji = 'favorite'; selColor = COLORS[0];
}

document.getElementById('addBtn').addEventListener('click', () => { editId = null; openModal('New Habit'); });
document.getElementById('btnCancel').addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });

document.getElementById('btnSave').addEventListener('click', () => {
  const name = habitInput.value.trim();
  if (!name) { habitInput.style.borderColor = '#f87171'; setTimeout(() => habitInput.style.borderColor = '', 1200); return; }
  if (editId) {
    const h = habits.find(h => h.id === editId);
    if (h) { h.name = name; h.emoji = selEmoji; h.color = selColor; }
  } else {
    habits.push({ id: uid(), name, emoji: selEmoji, color: selColor, log: {} });
  }
  save(); renderHabits(); closeModal();
});
habitInput.addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('btnSave').click(); });

function doEdit(id) {
  const h = habits.find(h => h.id === id); if (!h) return;
  editId = id; habitInput.value = h.name; selEmoji = iconKey(h.emoji) || 'favorite'; selColor = h.color || COLORS[0];
  openModal('Edit Habit');
}
// ── CONFIRM DIALOG (generic) ──────────────────────────────────────────────────
let confirmCb = null;
function askConfirm({ title, text, yes = 'Delete', onYes }) {
  const box = document.getElementById('confirmOverlay');
  box.querySelector('h3').textContent = title;
  box.querySelector('p').textContent = text;
  box.querySelector('.btn-yes').textContent = yes;
  confirmCb = onYes;
  box.classList.add('open');
}
function doConfirm(id) {
  askConfirm({
    title: 'Delete Habit?', text: 'All tracking data will be permanently removed.',
    onYes: () => { habits = habits.filter(h => h.id !== id); save(); renderHabits(); }
  });
}
document.getElementById('confirmNo').addEventListener('click', () => {
  document.getElementById('confirmOverlay').classList.remove('open'); confirmCb = null;
});
document.getElementById('confirmYes').addEventListener('click', () => {
  const cb = confirmCb; confirmCb = null;
  document.getElementById('confirmOverlay').classList.remove('open');
  if (cb) cb();
});

// ── PICKERS ───────────────────────────────────────────────────────────────────
function renderEmojiPicker() {
  const p = document.getElementById('emojiPicker'); p.innerHTML = '';
  document.documentElement.style.setProperty('--sel-color', selColor);
  EMOJIS.forEach(em => {
    const b = document.createElement('div');
    b.className = 'emoji-opt' + (em === selEmoji ? ' sel' : ''); b.innerHTML = ic(em);
    b.addEventListener('click', () => { selEmoji = em; renderEmojiPicker(); });
    p.appendChild(b);
  });
}
function renderColorPicker() {
  const p = document.getElementById('colorPicker'); p.innerHTML = '';
  document.documentElement.style.setProperty('--sel-color', selColor);
  COLORS.forEach((c, i) => {
    const s = document.createElement('div');
    s.className = 'color-sw' + (c === selColor ? ' sel' : '');
    s.style.background = c; s.style.setProperty('--sw-col', c); s.title = CNAMES[i] || c;
    s.addEventListener('click', () => {
      selColor = c;
      document.documentElement.style.setProperty('--sel-color', c);
      renderColorPicker(); renderEmojiPicker();
    });
    p.appendChild(s);
  });
}

// ── SETTINGS ──────────────────────────────────────────────────────────────────
document.getElementById('settingsBtn').addEventListener('click', () => {
  document.getElementById('settingsPanel').classList.add('open');
  document.getElementById('settingsOverlay').classList.add('open');
});
function closeSettings() {
  document.getElementById('settingsPanel').classList.remove('open');
  document.getElementById('settingsOverlay').classList.remove('open');
}
document.getElementById('settingsClose').addEventListener('click', closeSettings);
document.getElementById('settingsOverlay').addEventListener('click', closeSettings);

// ── TOAST ─────────────────────────────────────────────────────────────────────
function showToast(msg, type = 'success') {
  const t = document.getElementById('toast');
  t.innerHTML = ic(type === 'success' ? 'check_circle' : type === 'error' ? 'error' : 'info') + `<span>${esc(msg)}</span>`;
  t.className = `toast ${type} show`;
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3000);
}

// ══════════════════════════════════════════════════════════════════════════════
//  v5 MODULES — Tabs · Routine · Attendance · Weekend Planner · Daily Mind Game
// ══════════════════════════════════════════════════════════════════════════════

// ── shared helpers ────────────────────────────────────────────────────────────
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const load = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? d; } catch (e) { return d; } };
const store = (k, v) => localStorage.setItem(k, JSON.stringify(v));
const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
const isWeekend = d => d.getDay() === 0 || d.getDay() === 6;
const CHECK_SVG = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3.5 10l4.5 4.5 8.5-8.5" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

let prefs = Object.assign({ autoWeekend: true, haptics: true }, load('ht5_prefs', {}));

// Haptics: tiny vibrations (10–20 ms) for taps, short patterns for wins/misses.
// Works on Android (Chrome/Edge/Firefox); iOS Safari doesn't expose the Vibration API, so it's silently skipped there.
const HAPTIC = { tick: 8, undo: 10, check: 15, warn: [12, 45, 12], success: [18, 40, 30] };
function buzz(pattern = HAPTIC.check) {
  try { if (prefs.haptics !== false && navigator.vibrate) navigator.vibrate(pattern); } catch (e) { }
}
const savePrefs = () => store('ht5_prefs', prefs);

// Generic ⋯ popup menu (re-uses the .dropdown look)
function popMenu(btn, items) {
  closeMenu();
  const dd = document.createElement('div'); dd.className = 'dropdown'; dd.id = 'openDD';
  dd.innerHTML = items.map((it, i) => `<div class="dd-item${it.danger ? ' danger' : ''}" data-i="${i}">${it.label}</div>`).join('');
  dd.addEventListener('click', e => {
    e.stopPropagation();
    const i = e.target.closest('[data-i]')?.dataset.i;
    closeMenu();
    if (i !== undefined) items[i].fn();
  });
  btn.appendChild(dd);
}

// ══ TIMETABLES (Routine + Weekend Planner share one engine) ═══════════════════
const SLOT_TYPES = {
  class: { l: 'Class', e: 'school', c: '#5b84b1' },
  study: { l: 'Study', e: 'menu_book', c: '#7f86c8' },
  deep: { l: 'Deep work', e: 'psychology', c: '#a07cc0' },
  skill: { l: 'Skill', e: 'build', c: '#6aa6d6' },
  project: { l: 'Project', e: 'rocket_launch', c: '#c9738f' },
  workout: { l: 'Workout', e: 'fitness_center', c: '#e0975a' },
  meal: { l: 'Meal', e: 'restaurant', c: '#6fae8a' },
  break: { l: 'Break', e: 'coffee', c: '#4fa3a5' },
  rest: { l: 'Wind down', e: 'dark_mode', c: '#a07cc0' },
  other: { l: 'Other', e: 'star', c: '#d6b04c' }
};
const toMin = t => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
const minToT = m => `${p(Math.floor(m / 60))}:${p(m % 60)}`;
const fmtTime = t => { const [h, m] = t.split(':').map(Number); return `${h % 12 || 12}:${p(m)} ${h >= 12 ? 'PM' : 'AM'}`; };
const durText = (a, b) => { const m = toMin(b) - toMin(a), h = Math.floor(m / 60), r = m % 60; return (h ? `${h}h` : '') + (h && r ? ' ' : '') + (r ? `${r}m` : ''); };

const WEEKDAY_SEED = [
  ['06:00', '07:00', 'Workout', 'workout'], ['07:00', '08:00', 'Breakfast & get ready', 'meal'],
  ['08:00', '09:00', 'Commute & quick revision', 'study'], ['09:00', '13:00', 'Lectures', 'class'],
  ['13:00', '14:00', 'Lunch & break', 'meal'], ['14:00', '16:00', 'Labs / tutorials', 'class'],
  ['16:00', '17:00', 'Rest', 'break'], ['17:00', '19:00', 'Self study', 'study'],
  ['19:00', '20:00', 'Dinner', 'meal'], ['20:00', '22:00', 'Assignments & revision', 'study'],
  ['22:00', '23:00', 'Plan tomorrow & wind down', 'rest']
];
const WEEKEND_SEED = [
  ['06:30', '07:30', 'Workout', 'workout'], ['07:30', '08:30', 'Breakfast', 'meal'],
  ['08:30', '11:30', 'Deep work block', 'deep'], ['11:30', '12:00', 'Break', 'break'],
  ['12:00', '14:00', 'Skill development', 'skill'], ['14:00', '15:00', 'Lunch & rest', 'meal'],
  ['15:00', '18:00', 'Side project', 'project'], ['18:00', '19:00', 'Walk & free time', 'break'],
  ['19:00', '20:30', 'Weekly review & planning', 'deep'], ['21:00', '22:00', 'Reading', 'study']
];

const TIME_RE = /^\d{1,2}:\d{2}$/;
function cleanSlots(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.filter(s => s && typeof s === 'object' && s.id && typeof s.title === 'string'
    && TIME_RE.test(s.start || '') && TIME_RE.test(s.end || ''))
    .map(s => ({
      ...s, start: s.start.padStart(5, '0'), end: s.end.padStart(5, '0'),
      type: SLOT_TYPES[s.type] ? s.type : 'other', log: (s.log && typeof s.log === 'object') ? s.log : {}
    }));
}
function makeTimetable(cfg) {
  const T = { cfg, slots: cleanSlots(load(cfg.key, [])), editId: null };
  const root = document.getElementById(cfg.view);
  const persist = () => store(cfg.key, T.slots);
  T.persist = persist;

  T.nextStart = () => {
    const last = T.slots.reduce((m, s) => Math.max(m, toMin(s.end)), 0);
    return minToT(last && last < 23 * 60 ? last : toMin(cfg.firstStart));
  };

  T.render = function () {
    const canCheck = cfg.canCheck();
    const sorted = [...T.slots].sort((a, b) => toMin(a.start) - toMin(b.start) || toMin(a.end) - toMin(b.end));
    const total = sorted.length;
    const done = sorted.filter(s => s.log && s.log[todayStr]).length;
    const pct = total ? Math.round(done / total * 100) : 0;
    const planned = sorted.reduce((m, s) => m + toMin(s.end) - toMin(s.start), 0);
    const plannedT = `${Math.floor(planned / 60)}h${planned % 60 ? ` ${planned % 60}m` : ''}`;
    const n = new Date(), nowMin = n.getHours() * 60 + n.getMinutes();
    const plural = total !== 1 ? 's' : '';

    const items = sorted.map(s => {
      const t = SLOT_TYPES[s.type] || SLOT_TYPES.other;
      const isDone = !!(s.log && s.log[todayStr]);
      const isNow = cfg.canCheck() && nowMin >= toMin(s.start) && nowMin < toMin(s.end);
      const bp = isDone ? 100 : isNow ? Math.round((nowMin - toMin(s.start)) / Math.max(1, toMin(s.end) - toMin(s.start)) * 100) : 0;
      return `<div class="tl-item${isDone ? ' done' : ''}${isNow ? ' now' : ''}" data-id="${s.id}" style="--tc:${t.c}">
        <div class="tl-time"><b>${fmtTime(s.start)}</b><span>${fmtTime(s.end)}</span></div>
        <div class="tl-rail"><i class="tl-dot"></i></div>
        <div class="tl-card">
          <span class="hc-tab" aria-hidden="true"></span>
          <div class="hc-prog"><i><u style="width:${bp}%"></u></i><b>${bp}%</b></div>
          <div class="habit-icon tl-ico" style="background:${hexA(t.c, .22)};color:${t.c}">${ic(t.e)}</div>
          <div class="tl-mid">
            <div class="tl-name">${esc(s.title)}</div>
            <div class="tl-meta">${durText(s.start, s.end)} · ${t.l}${isNow ? '<em class="now-chip">Now</em>' : ''}</div>
          </div>
          <div class="habit-check-btn tl-chk${isDone ? ' checked' : ''}${canCheck ? '' : ' locked'}" data-act="chk" role="button" aria-label="Mark complete" style="${isDone ? `background:${hexA(t.c, .9)}` : ''}">${CHECK_SVG}</div>
          <div class="habit-menu-btn" data-act="menu" role="button" aria-label="More">${ic('more_horiz')}</div>
        </div>
      </div>`;
    }).join('');

    root.innerHTML = `
      <div class="today-banner">
        <div class="tb-left">
          <div class="tb-label">${canCheck ? cfg.bannerLabel : cfg.bannerLabelIdle}</div>
          <div class="tb-count">${canCheck ? `${done} <span>/ ${total} block${plural}</span>` : `${total} <span>block${plural} planned</span>`}</div>
          <div class="tb-bar-wrap"><div class="tb-bar" style="width:${canCheck ? pct : 0}%;background:var(--primary)"></div></div>
        </div>
        <div class="tb-pct" style="color:${canCheck && pct === 100 && total ? 'var(--success)' : 'inherit'}">${canCheck ? pct + '%' : plannedT}</div>
      </div>
      ${cfg.hint()}
      <div class="add-wrap"><button class="add-btn" data-act="add"><span class="add-plus">+</span> Add Time Block</button></div>
      <div class="timeline">${items || `<div class="empty"><div class="empty-icon">${cfg.emptyIcon}</div><p>${cfg.emptyText}</p><button class="chip-btn" data-act="seed">Load a starter template</button></div>`}</div>`;
  };

  T.toggle = id => {
    if (!cfg.canCheck()) { showToast(cfg.lockMsg, 'info'); return; }
    const s = T.slots.find(x => x.id === id); if (!s) return;
    s.log = s.log || {};
    const nowDone = !s.log[todayStr];
    if (nowDone) s.log[todayStr] = true; else delete s.log[todayStr];
    persist(); T.render();
    buzz(nowDone ? HAPTIC.check : HAPTIC.undo);
    if (nowDone) {
      root.querySelector(`.tl-item[data-id="${id}"] .tl-chk`)?.classList.add('pop');
      if (T.slots.every(x => x.log && x.log[todayStr])) { showToast('Every block done — great day!'); buzz(HAPTIC.success); }
    }
  };

  root.addEventListener('click', e => {
    const sw = e.target.closest('[data-switch-mode]'); if (sw) { switchRoutineMode(sw.dataset.switchMode); return; }
    const go = e.target.closest('[data-go]');
    if (go) {
      if (go.dataset.go === 'planner') switchRoutineMode('weekend');
      else showTab(go.dataset.go);
      return;
    }
    const el = e.target.closest('[data-act]'); if (!el) return;
    const id = el.closest('.tl-item')?.dataset.id;
    switch (el.dataset.act) {
      case 'add': openSlot(T, null); break;
      case 'chk': T.toggle(id); break;
      case 'seed':
        T.slots = cfg.seed.map(([start, end, title, type]) => ({ id: uid(), start, end, title, type, log: {} }));
        persist(); T.render(); showToast('Starter template loaded'); break;
      case 'menu':
        e.stopPropagation();
        popMenu(el, [
          { label: `${ic('edit')}Edit`, fn: () => openSlot(T, id) },
          {
            label: `${ic('delete')}Delete`, danger: true, fn: () => askConfirm({
              title: 'Delete time block?', text: 'This block will be removed from your timetable.',
              onYes: () => { T.slots = T.slots.filter(s => s.id !== id); persist(); T.render(); }
            })
          }
        ]);
        break;
    }
  });
  return T;
}

let routineMode = (prefs.autoWeekend && isWeekend(today)) ? 'weekend' : 'weekday';

const RT = makeTimetable({
  key: 'ht5_routine', view: 'rt-pane-weekday', firstStart: '06:00', defaultType: 'study', seed: WEEKDAY_SEED,
  bannerLabel: "Today's routine", bannerLabelIdle: 'Daily routine',
  emptyIcon: ic('calendar_month'), emptyText: 'No time blocks yet.<br>Map out your day from 6 AM to 11 PM.',
  canCheck: () => true, lockMsg: '',
  hint: () => isWeekend(today)
    ? `<div class="hint-chip" data-switch-mode="weekend" role="button"><span class="hc-ico">${ic('grass')}</span><div><b>It's the weekend</b><small>Classes are off — switch to your Weekend Plan</small></div></div>`
    : ''
});
const WK = makeTimetable({
  key: 'ht5_weekend', view: 'rt-pane-weekend', firstStart: '07:00', defaultType: 'deep', seed: WEEKEND_SEED,
  bannerLabel: "Weekend plan", bannerLabelIdle: 'Weekend plan',
  emptyIcon: ic('grass'), emptyText: 'Design your Saturday &amp; Sunday.<br>Deep work, skills and side projects.',
  canCheck: () => isWeekend(today), lockMsg: 'Check-offs unlock on Saturday & Sunday',
  hint: () => {
    if (isWeekend(today)) return `<div class="hint-chip on"><span class="hc-ico">${ic('auto_awesome')}</span><div><b>Weekend mode is on</b><small>One plan, tracked separately for Saturday and Sunday</small></div></div>`;
    const d = (6 - today.getDay() + 7) % 7;
    return `<div class="hint-chip"><span class="hc-ico">${ic('hourglass_top')}</span><div><b>Weekend starts in ${d} day${d !== 1 ? 's' : ''}</b><small>Edit your plan now — check-offs unlock on Saturday</small></div></div>`;
  }
});

function switchRoutineMode(m) {
  routineMode = m;
  const seg = document.getElementById('routineModeSeg');
  if (seg) {
    seg.querySelectorAll('.seg-btn').forEach(b => b.classList.toggle('sel', b.dataset.rmode === m));
  }
  const pw = document.getElementById('rt-pane-weekday');
  const pe = document.getElementById('rt-pane-weekend');
  if (pw) pw.style.display = m === 'weekday' ? '' : 'none';
  if (pe) pe.style.display = m === 'weekend' ? '' : 'none';
  if (m === 'weekday') RT.render(); else WK.render();
}

document.getElementById('routineModeSeg')?.addEventListener('click', e => {
  const b = e.target.closest('[data-rmode]');
  if (!b) return;
  buzz(HAPTIC.tick);
  switchRoutineMode(b.dataset.rmode);
});

function renderRoutine() {
  const pw = document.getElementById('rt-pane-weekday');
  const pe = document.getElementById('rt-pane-weekend');
  if (pw) pw.style.display = routineMode === 'weekday' ? '' : 'none';
  if (pe) pe.style.display = routineMode === 'weekend' ? '' : 'none';
  const seg = document.getElementById('routineModeSeg');
  if (seg) {
    seg.querySelectorAll('.seg-btn').forEach(b => b.classList.toggle('sel', b.dataset.rmode === routineMode));
  }
  if (routineMode === 'weekday') RT.render(); else WK.render();
}

// ── time-block sheet ──────────────────────────────────────────────────────────
const slotOv = document.getElementById('slotOverlay');
const slotName = document.getElementById('slotName'), slotStart = document.getElementById('slotStart'),
  slotEnd = document.getElementById('slotEnd'), slotErr = document.getElementById('slotErr');
let slotCtx = null, slotType = 'other';

function renderSlotTypes() {
  document.getElementById('slotTypes').innerHTML = Object.entries(SLOT_TYPES).map(([k, t]) =>
    `<button type="button" class="type-chip${k === slotType ? ' sel' : ''}" data-k="${k}" style="--tc:${t.c}">${ic(t.e)}${t.l}</button>`).join('');
}
document.getElementById('slotTypes').addEventListener('click', e => {
  const b = e.target.closest('[data-k]'); if (!b) return; slotType = b.dataset.k; renderSlotTypes();
});
function openSlot(T, id) {
  slotCtx = T; T.editId = id;
  const s = id ? T.slots.find(x => x.id === id) : null;
  document.getElementById('slotTitle').textContent = s ? 'Edit Time Block' : (T === WK ? 'New Weekend Block' : 'New Time Block');
  slotName.value = s?.title || '';
  slotStart.value = s?.start || T.nextStart();
  slotEnd.value = s?.end || minToT(Math.min(toMin(slotStart.value) + 60, 23 * 60 + 59));
  slotType = s?.type || T.cfg.defaultType;
  slotErr.textContent = ''; renderSlotTypes();
  slotOv.classList.add('open'); setTimeout(() => slotName.focus(), 300);
}
function closeSlot() { slotOv.classList.remove('open'); slotCtx = null; }
document.getElementById('slotCancel').addEventListener('click', closeSlot);
slotOv.addEventListener('click', e => { if (e.target === slotOv) closeSlot(); });
slotName.addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('slotSave').click(); });
document.getElementById('slotSave').addEventListener('click', () => {
  const T = slotCtx; if (!T) return;
  const title = slotName.value.trim(), start = slotStart.value, end = slotEnd.value;
  if (!title) { slotErr.textContent = 'Give this block a name.'; slotName.focus(); return; }
  if (!start || !end) { slotErr.textContent = 'Pick a start and end time.'; return; }
  if (toMin(end) <= toMin(start)) { slotErr.textContent = 'End time must be after the start time.'; return; }
  const clash = T.slots.find(o => o.id !== T.editId && toMin(o.start) < toMin(end) && toMin(start) < toMin(o.end));
  if (T.editId) {
    const s = T.slots.find(x => x.id === T.editId);
    if (s) { s.title = title; s.start = start; s.end = end; s.type = slotType; }
  } else {
    T.slots.push({ id: uid(), title, start, end, type: slotType, log: {} });
  }
  T.persist(); T.render(); closeSlot();
  if (clash) showToast(`Overlaps with “${clash.title}”`, 'info');
});

// ══ ATTENDANCE ════════════════════════════════════════════════════════════════
let att = (() => {
  const a = load('ht5_attendance', null);
  if (!a || !Array.isArray(a.subjects)) return { threshold: 75, subjects: [] };
  a.subjects = a.subjects.filter(s => s && s.id && typeof s.name === 'string' && Number.isInteger(s.a) && Number.isInteger(s.t) && s.a >= 0 && s.a <= s.t)
    .map(s => {
      const h = typeof s.h === 'string' ? s.h : '';
      let hd = Array.isArray(s.hd) ? s.hd.slice(-h.length || 0) : [];
      if (hd.length < h.length) hd = Array(h.length - hd.length).fill(null).concat(hd);   // keep dates aligned with the P/A history
      const d = {};
      if (s.d && typeof s.d === 'object') Object.keys(s.d).forEach(k => {
        const r = s.d[k], pp = r && r.p | 0, aa = r && r.a | 0;
        if (/^\d{4}-\d{2}-\d{2}$/.test(k) && pp >= 0 && aa >= 0 && pp + aa > 0) d[k] = { p: pp, a: aa };
      });
      return { ...s, h, hd, d };
    });
  a.threshold = Number.isFinite(a.threshold) ? Math.min(95, Math.max(50, a.threshold)) : 75;
  return a;
})();
const saveAtt = () => store('ht5_attendance', att);
const pctTxt = v => { const f = Math.floor(v * 10) / 10; return (Number.isInteger(f) ? f : f.toFixed(1)) + '%'; };
const attOk = (a, t, T) => t > 0 && a * 100 >= T * t;
let attJustAdded = null, attBump = null;

function attTip(s, T) {
  if (!s.t) return 'Log your first class to start tracking.';
  if (attOk(s.a, s.t, T)) {
    const m = Math.floor((s.a * 100 - T * s.t) / T);
    return m > 0 ? `You can miss ${m} more class${m > 1 ? 'es' : ''} and stay above ${T}%.` : `Right at the line — don’t miss the next class.`;
  }
  const n = Math.ceil((T * s.t - 100 * s.a) / (100 - T));
  return `Attend the next ${n} class${n > 1 ? 'es' : ''} in a row to reach ${T}%.`;
}

function renderAttendance() {
  const root = document.getElementById('view-attendance'), T = att.threshold;
  const A = att.subjects.reduce((m, s) => m + s.a, 0), TT = att.subjects.reduce((m, s) => m + s.t, 0);
  const overall = TT ? A / TT * 100 : 0;
  const safe = att.subjects.filter(s => attOk(s.a, s.t, T)).length;
  const risk = att.subjects.filter(s => s.t > 0 && !attOk(s.a, s.t, T)).length;

  const cards = att.subjects.map(s => {
    const has = s.t > 0, ok = attOk(s.a, s.t, T), v = has ? s.a / s.t * 100 : 0;
    const col = COLORS[[...s.name].reduce((h, c) => h + c.charCodeAt(0), 0) % COLORS.length];
    return `<div class="att-card${has && !ok ? ' low' : ''}${s.id === attJustAdded ? ' enter' : ''}" data-id="${s.id}" style="--hc:${col}">
      <div class="att-top">
        <div class="habit-icon att-ico" style="background:${hexA(col, .22)};color:${col}">${esc(s.name.trim().charAt(0).toUpperCase())}</div>
        <div class="att-mid"><div class="att-name">${esc(s.name)}</div><div class="att-count">${s.a} / ${s.t} classes attended</div></div>
        <span class="att-badge ${!has ? 'na' : ok ? 'ok' : 'bad'}${s.id === attBump ? ' bump' : ''}">${has ? pctTxt(v) : '—'}</span>
        <div class="habit-menu-btn" data-act="menu" role="button" aria-label="More">${ic('more_horiz')}</div>
      </div>
      <div class="att-bar"><div class="att-fill" style="width:${Math.min(100, v)}%"></div><i class="att-mark" style="left:${T}%"></i></div>
      <div class="att-tip">${attTip(s, T)}</div>
      <div class="att-actions">
        <button class="att-btn present" data-act="p">+ Present</button>
        <button class="att-btn absent"  data-act="a">+ Absent</button>
        <button class="att-undo" data-act="u" aria-label="Undo last entry" ${s.h ? '' : 'disabled'}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14L4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/></svg></button>
      </div>
    </div>`;
  }).join('');

  root.innerHTML = `
    <div class="today-banner att-banner">
      <div class="tb-left">
        <div class="tb-label">Overall attendance</div>
        <div class="tb-count">${TT ? pctTxt(overall) : '—'} <span>${A} / ${TT} classes</span></div>
        <div class="tb-bar-wrap att-bar-wrap"><div class="tb-bar" style="width:${Math.min(100, overall)}%;background:${TT && !attOk(A, TT, T) ? 'var(--danger)' : 'var(--success)'}"></div><i class="att-mark" style="left:${T}%"></i></div>
      </div>
      <div class="thr">
        <div class="tb-label">Safe level</div>
        <div class="thr-ctl"><button data-act="thr-" aria-label="Lower safe level">−</button><b>${T}%</b><button data-act="thr+" aria-label="Raise safe level">+</button></div>
      </div>
    </div>
    ${att.subjects.length ? `<div class="stat-chips"><span class="s-chip ok">${ic('check')}${safe} on track</span><span class="s-chip ${risk ? 'bad' : ''}">${ic('warning')}${risk} below ${T}%</span></div>` : ''}
    <div class="add-wrap"><button class="add-btn" data-act="add"><span class="add-plus">+</span> Add Subject</button></div>
    <div class="att-list">${cards || `<div class="empty"><div class="empty-icon">${ic('school')}</div><p>No subjects yet.<br>Add your courses to track attendance.</p></div>`}</div>`;
  attJustAdded = null; attBump = null;
}

document.getElementById('view-attendance').addEventListener('click', e => {
  const el = e.target.closest('[data-act]'); if (!el) return;
  const id = el.closest('.att-card')?.dataset.id, s = att.subjects.find(x => x.id === id);
  switch (el.dataset.act) {
    case 'add': openSubj(null); break;
    case 'thr-': buzz(HAPTIC.tick); att.threshold = Math.max(50, att.threshold - 5); saveAtt(); renderAttendance(); break;
    case 'thr+': buzz(HAPTIC.tick); att.threshold = Math.min(95, att.threshold + 5); saveAtt(); renderAttendance(); break;
    case 'p': case 'a':
      if (!s) break;
      s.t++; if (el.dataset.act === 'p') s.a++;
      buzz(el.dataset.act === 'p' ? HAPTIC.check : HAPTIC.warn);
      s.h = ((s.h || '') + (el.dataset.act === 'p' ? 'P' : 'A')).slice(-50);
      s.hd = [...(s.hd || []), todayStr].slice(-50);
      { const r = s.d[todayStr] || (s.d[todayStr] = { p: 0, a: 0 }); r[el.dataset.act === 'p' ? 'p' : 'a']++; }   // remember the day for the calendar
      saveAtt(); attBump = id; renderAttendance(); break;
    case 'u':
      if (!s || !s.h) break;
      {
        const wasP = s.h.slice(-1) === 'P', ds = (s.hd || []).slice(-1)[0], r = ds && s.d[ds];
        if (r) { r[wasP ? 'p' : 'a'] = Math.max(0, r[wasP ? 'p' : 'a'] - 1); if (!r.p && !r.a) delete s.d[ds]; }
        s.hd = (s.hd || []).slice(0, -1);
      }
      if (s.h.slice(-1) === 'P') s.a--; s.t--; s.h = s.h.slice(0, -1);
      saveAtt(); attBump = id; renderAttendance(); showToast('Last entry undone', 'info'); buzz(HAPTIC.undo); break;
    case 'menu':
      e.stopPropagation();
      popMenu(el, [
        { label: `${ic('calendar_month')}Calendar`, fn: () => openAttCal(id, el) },
        { label: `${ic('edit')}Edit`, fn: () => openSubj(id) },
        {
          label: `${ic('delete')}Delete`, danger: true, fn: () => askConfirm({
            title: 'Delete subject?', text: `“${s.name}” and its attendance record will be removed.`,
            onYes: () => { att.subjects = att.subjects.filter(x => x.id !== id); saveAtt(); renderAttendance(); }
          })
        }
      ]);
      break;
  }
});

// subject sheet
const subjOv = document.getElementById('subjOverlay'), subjName = document.getElementById('subjName'),
  subjA = document.getElementById('subjA'), subjT = document.getElementById('subjT'), subjErr = document.getElementById('subjErr');
let subjEditId = null;
function openSubj(id) {
  subjEditId = id;
  const s = id ? att.subjects.find(x => x.id === id) : null;
  document.getElementById('subjTitle').textContent = s ? 'Edit Subject' : 'New Subject';
  subjName.value = s?.name || ''; subjA.value = s ? s.a : 0; subjT.value = s ? s.t : 0; subjErr.textContent = '';
  subjOv.classList.add('open'); setTimeout(() => subjName.focus(), 300);
}
function closeSubj() { subjOv.classList.remove('open'); subjEditId = null; }
document.getElementById('subjCancel').addEventListener('click', closeSubj);
subjOv.addEventListener('click', e => { if (e.target === subjOv) closeSubj(); });
document.getElementById('subjSave').addEventListener('click', () => {
  const name = subjName.value.trim(), a = parseInt(subjA.value, 10), t = parseInt(subjT.value, 10);
  if (!name) { subjErr.textContent = 'Enter a subject name.'; return; }
  if (!Number.isInteger(a) || !Number.isInteger(t) || a < 0 || t < 0) { subjErr.textContent = 'Class counts must be whole numbers, 0 or more.'; return; }
  if (a > t) { subjErr.textContent = 'Attended classes can’t exceed total classes.'; return; }
  if (subjEditId) {
    const s = att.subjects.find(x => x.id === subjEditId);
    if (s) {
      if (s.a !== a || s.t !== t) {
        s.h = ''; s.hd = [];
        const dd = Object.values(s.d || {}), sp = dd.reduce((m, r) => m + r.p, 0), st = dd.reduce((m, r) => m + r.p + r.a, 0);
        if (a < sp || t < st) s.d = {};                         // totals dropped below the dated records → they'd contradict
      }
      s.name = name; s.a = a; s.t = t;
    }
  } else {
    const id = uid(); att.subjects.push({ id, name, a, t, h: '', hd: [], d: {} }); attJustAdded = id;
  }
  saveAtt(); renderAttendance(); closeSubj();
});
subjName.addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('subjSave').click(); });

// ══ DAILY MIND GAME ═══════════════════════════════════════════════════════════
let game = Object.assign({ points: 0, best: 0, streak: 0, lastWon: null, days: {} }, load('ht5_game', {}));
if (typeof game.days !== 'object' || !game.days) game.days = {};
['points', 'best', 'streak'].forEach(k => { if (!Number.isFinite(game[k])) game[k] = 0; });
const saveGame = () => store('ht5_game', game);

function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function dayNumOf(ds) { const [y, m, d] = ds.split('-').map(Number); return Math.floor(Date.UTC(y, m - 1, d) / 864e5); }

const TECH_WORDS = [
  ['COMPILER', 'Translates source code into machine code'], ['VARIABLE', 'A named container for a value'],
  ['FUNCTION', 'A reusable block of code you can call'], ['RECURSION', 'When a function calls itself'],
  ['ALGORITHM', 'A step-by-step procedure to solve a problem'], ['DATABASE', 'An organised collection of stored data'],
  ['BOOLEAN', 'A value that is only true or false'], ['POINTER', 'Holds the memory address of another value'],
  ['ITERATOR', 'Walks through the items of a collection'], ['INTERFACE', 'A contract describing what a type can do'],
  ['FRAMEWORK', 'Reusable scaffolding for building apps'], ['REPOSITORY', 'Where a project’s code and history live'],
  ['ENCRYPTION', 'Scrambling data so only key holders can read it'], ['BANDWIDTH', 'Maximum data a connection can carry per second'],
  ['CACHE', 'Fast storage for recently used data'], ['DEBUGGER', 'A tool for stepping through code to find bugs'],
  ['SYNTAX', 'The grammar rules of a programming language'], ['PROTOCOL', 'Agreed rules for how systems communicate'],
  ['KERNEL', 'The core of an operating system'], ['LATENCY', 'The delay before a data transfer begins'],
  ['MIDDLEWARE', 'Software that sits between other layers'], ['OVERFLOW', 'A value too big for its storage'],
  ['INHERITANCE', 'A class gaining traits from a parent class'], ['THREAD', 'Smallest unit of execution in a process'],
  ['SOCKET', 'Endpoint for network communication'], ['QUEUE', 'First in, first out data structure'],
  ['COMPONENT', 'A self-contained, reusable piece of a UI'], ['BINARY', 'The base-2 number system'],
  ['HASHMAP', 'Key-value store with near-instant lookups'], ['DEPLOYMENT', 'Releasing software to its users']
];
const CODE_BANK = [
  { q: 'What does this print?', code: 'console.log(0.1 + 0.2 === 0.3)', o: ['true', 'false', 'undefined', 'NaN'], a: 1, why: 'Floating-point rounding makes 0.1 + 0.2 equal 0.30000000000000004.' },
  { q: 'What does this print?', code: 'console.log(typeof null)', o: ['"null"', '"undefined"', '"object"', '"number"'], a: 2, why: 'A famous JavaScript quirk: typeof null is "object".' },
  { q: 'What does this print?', code: 'print(len(set([1, 2, 2, 3, 3, 3])))', o: ['6', '3', '2', '1'], a: 1, why: 'A set keeps only unique values: {1, 2, 3}.' },
  { q: 'What does this print?', code: 'console.log([1,2,3].map(x => x*2).filter(x => x>2).length)', o: ['1', '2', '3', '6'], a: 1, why: 'map gives [2,4,6]; filter keeps [4,6]; length is 2.' },
  { q: 'What is binary 1011 in decimal?', code: '1011₂ = ?', o: ['9', '10', '11', '13'], a: 2, why: '8 + 0 + 2 + 1 = 11.' },
  { q: 'What does this print?', code: 'print("ab" * 3)', o: ['ab3', 'ababab', 'abbbb', 'Error'], a: 1, why: 'Python repeats a string when you multiply it by an integer.' },
  { q: 'What does this print?', code: 'console.log("5" + 3, "5" - 3)', o: ['8 2', '53 2', '53 53', '8 8'], a: 1, why: '+ concatenates with a string ("53"), while − forces numbers (2).' },
  { q: 'Binary search on a sorted list of 1024 items needs about how many steps?', code: 'n = 1024', o: ['10', '32', '512', '1024'], a: 0, why: 'Each step halves the range, and log₂(1024) = 10.' },
  { q: 'What does this print?', code: 'a = [1, 2, 3]\nb = a\nb.append(4)\nprint(len(a))', o: ['3', '4', '7', 'Error'], a: 1, why: 'b and a point to the same list, so appending through b changes a.' },
  { q: 'Which item is on top of the stack at the end?', code: 'push 1, push 2, push 3\npop\npush 4\npop', o: ['1', '2', '3', '4'], a: 1, why: '[1,2,3] → pop → [1,2] → push 4 → [1,2,4] → pop → [1,2]. Top is 2.' },
  { q: 'What does this print?', code: 'console.log([] + [])', o: ['0', '"[]"', '"" (empty string)', 'undefined'], a: 2, why: 'Both arrays convert to empty strings, and "" + "" is "".' },
  { q: 'Which item is at the front of the queue at the end?', code: 'enqueue A, B, C\ndequeue\nenqueue D\ndequeue', o: ['A', 'B', 'C', 'D'], a: 2, why: '[A,B,C] → [B,C] → [B,C,D] → [C,D]. Front is C.' },
  { q: 'What does this print?', code: 'print(10 // 3, 10 % 3)', o: ['3 1', '3.33 1', '3 3', '1 3'], a: 0, why: '// is integer division (3) and % is the remainder (1).' },
  { q: 'What does this print?', code: 'console.log(Boolean("false"))', o: ['true', 'false', '"false"', 'Error'], a: 0, why: 'Any non-empty string is truthy, even the text "false".' }
];

function getPuzzle(ds) {
  const n = dayNumOf(ds), rnd = mulberry32(n * 7919 + 13), kind = n % 3, cyc = Math.floor(n / 3);
  const ri = (lo, hi) => lo + Math.floor(rnd() * (hi - lo + 1));

  if (kind === 0) {
    const gens = [
      () => { const a = ri(1, 15), d = ri(2, 9); return { s: Array.from({ length: 7 }, (_, i) => a + d * i), hint: 'Look at the gap between neighbouring numbers.', why: `Add ${d} each time.` }; },
      () => { const a = ri(1, 4), r = ri(2, 3); return { s: Array.from({ length: 6 }, (_, i) => a * r ** i), hint: 'Each term is a multiple of the one before it.', why: `Multiply by ${r} each time.` }; },
      () => { const k = ri(0, 8); return { s: Array.from({ length: 7 }, (_, i) => (i + 1) ** 2 + k), hint: 'Think about perfect squares.', why: k ? `Each term is n² + ${k}.` : 'Each term is a perfect square.' }; },
      () => { const a = ri(1, 3), b = ri(2, 5), s = [a, b]; while (s.length < 7) s.push(s[s.length - 1] + s[s.length - 2]); return { s, hint: 'Each number depends on the two before it.', why: 'Each term is the sum of the previous two.' }; },
      () => { const a = ri(2, 6), b = a + ri(1, 3), s = [ri(1, 5)]; while (s.length < 7) s.push(s[s.length - 1] + (s.length % 2 ? a : b)); return { s, hint: 'The gap alternates between two values.', why: `Alternately add ${a} and ${b}.` }; },
      () => { const s0 = ri(1, 5), k = ri(1, 3); return { s: Array.from({ length: 7 }, (_, i) => s0 + k * i * (i + 1) / 2), hint: 'The gaps themselves follow a pattern.', why: `The gap grows by ${k} each step.` }; }
    ];
    const g = gens[ri(0, gens.length - 1)]();
    return { kind: 'seq', label: 'Number sequence', max: 3, terms: g.s.slice(0, -1), answer: String(g.s[g.s.length - 1]), hint: g.hint, why: g.why };
  }
  if (kind === 1) {
    const [w, c] = TECH_WORDS[cyc % TECH_WORDS.length];
    let letters, tries = 0;
    do { letters = w.split(''); for (let i = letters.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1));[letters[i], letters[j]] = [letters[j], letters[i]]; } } while (letters.join('') === w && ++tries < 10);
    return { kind: 'word', label: 'Tech word scramble', max: 3, letters, clue: c, answer: w, hint: `It starts with “${w[0]}”.`, why: `${w[0] + w.slice(1).toLowerCase()} — ${c.charAt(0).toLowerCase() + c.slice(1)}.` };
  }
  const b = CODE_BANK[cyc % CODE_BANK.length];
  const order = b.o.map((_, i) => i); for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1));[order[i], order[j]] = [order[j], order[i]]; }
  return { kind: 'mc', label: 'Code & logic', max: 2, q: b.q, code: b.code, options: order.map(i => b.o[i]), answer: String(order.indexOf(b.a)), hint: 'Trace it one line at a time.', why: b.why };
}

const gameStreak = () => (game.lastWon === todayStr || game.lastWon === fmt(addDays(today, -1))) ? game.streak : 0;

function renderGame() {
  const root = document.getElementById('gMind'), pz = getPuzzle(todayStr);
  const rec = game.days[todayStr] || { t: 0, s: false, o: false, g: [], p: 0 };
  const st = gameStreak();
  const miss = rec.t > 0 && !rec.o;

  let body = '';
  if (pz.kind === 'seq') {
    body = `<p class="gc-q">What number comes next?</p><div class="tiles">${pz.terms.map(n => `<div class="tile">${n}</div>`).join('')}<div class="tile q">?</div></div>`;
  } else if (pz.kind === 'word') {
    body = `<p class="gc-q">Unscramble this tech term</p><div class="tiles">${pz.letters.map(l => `<div class="tile">${l}</div>`).join('')}</div>
            <p class="gc-sub">${pz.letters.length} letters · ${esc(pz.clue)}</p>`;
  } else {
    body = `<p class="gc-q">${esc(pz.q)}</p><pre class="code">${esc(pz.code)}</pre>`;
  }

  const wrongTxt = rec.g.filter(g => g !== pz.answer);
  let play = '';
  if (pz.kind === 'mc') {
    play = `<div class="mc-list">${pz.options.map((o, i) => {
      const tried = rec.g.includes(String(i)), right = rec.o && String(i) === pz.answer;
      return `<button class="mc-opt${tried && String(i) !== pz.answer ? ' wrong' : ''}${right ? ' right' : ''}" data-i="${i}" ${rec.o || tried ? 'disabled' : ''}>${esc(o)}</button>`;
    }).join('')}</div>`;
  } else if (!rec.o) {
    play = `${wrongTxt.length ? `<div class="guess-chips">${wrongTxt.map(g => `<span>${esc(g)}</span>`).join('')}</div>` : ''}
      <div class="game-form">
        <input class="modal-input" id="gIn" autocomplete="off" autocapitalize="characters" spellcheck="false" ${pz.kind === 'seq' ? 'inputmode="numeric"' : ''} placeholder="${pz.kind === 'seq' ? 'Your answer' : 'Type the word'}">
        <button class="btn-save" id="gGo">Check</button>
      </div>`;
  }

  const ansTxt = pz.kind === 'mc' ? pz.options[+pz.answer] : pz.answer;
  let result = '';
  if (rec.o) {
    result = rec.s
      ? `<div class="gc-result win"><b>Solved in ${rec.t} ${rec.t > 1 ? 'tries' : 'try'}</b><span>+${rec.p} discipline points</span></div>`
      : `<div class="gc-result lose"><b>Out of tries</b><span>The answer was ${esc(ansTxt)}</span></div>`;
    result += `<p class="gc-why">${esc(pz.why)}</p><div class="gc-next">Next puzzle in <b id="gcCount">--:--:--</b></div>`;
  } else if (miss) {
    result = `<div class="gc-hint">${ic('lightbulb')}${esc(pz.hint)}</div>`;
  }

  const hist = Array.from({ length: 14 }, (_, i) => {
    const ds = fmt(addDays(today, i - 13)), r = game.days[ds];
    return `<i class="gh-dot${r?.s ? ' won' : r?.o ? ' lost' : ''}${ds === todayStr ? ' now' : ''}" title="${ds}"></i>`;
  }).join('');

  root.innerHTML = `
    <div class="game-hero">
      ${ghStat('local_fire_department', 'fire', st, 'Day streak')}
      ${ghStat('star', 'gold', game.points, 'Discipline points')}
      ${ghStat('emoji_events', 'amber', game.best, 'Best streak')}
    </div>
    ${st > 0 && !rec.s ? `<div class="hint-chip"><span class="hc-ico">${ic('local_fire_department', null, 'fire')}</span><div><b>Keep your ${st}-day streak alive</b><small>Solve today’s puzzle before midnight</small></div></div>` : ''}
    <div class="game-card${rec.s ? ' solved' : ''}">
      <div class="gc-top"><span class="gc-chip">${pz.label}</span>
        <div class="gc-tries" aria-label="${pz.max - rec.t} tries left">${Array.from({ length: pz.max }, (_, i) => `<i class="${i < rec.t ? (rec.s && i === rec.t - 1 ? 'win' : 'used') : ''}"></i>`).join('')}</div></div>
      ${body}${play}${result}
    </div>
    <div class="sec-lbl hist-lbl">Last 14 days</div>
    <div class="game-hist">${hist}</div>`;
  countUps(root);
  tickCountdown();
}

function tickCountdown() {
  const el = document.getElementById('gcCount'); if (!el) return;
  const n = new Date(), mid = new Date(n.getFullYear(), n.getMonth(), n.getDate() + 1);
  const s = Math.max(0, Math.floor((mid - n) / 1000));
  el.textContent = `${p(Math.floor(s / 3600))}:${p(Math.floor(s % 3600 / 60))}:${p(s % 60)}`;
}
setInterval(tickCountdown, 1000);

function submitGuess(raw) {
  const pz = getPuzzle(todayStr);
  const rec = game.days[todayStr] || (game.days[todayStr] = { t: 0, s: false, o: false, g: [], p: 0 });
  if (rec.o) return;
  let guess = String(raw).trim();
  if (pz.kind === 'seq') { if (guess === '' || isNaN(Number(guess))) { showToast('Enter a number', 'error'); return; } guess = String(Number(guess)); }
  else if (pz.kind === 'word') { guess = guess.toUpperCase().replace(/[^A-Z]/g, ''); if (!guess) { showToast('Type a word', 'error'); return; } }
  if (rec.g.includes(guess)) { showToast('You already tried that', 'info'); return; }

  rec.g.push(guess); rec.t++;
  const ok = guess === pz.answer;
  if (ok) {
    rec.s = true; rec.o = true; rec.p = ({ 1: 30, 2: 20, 3: 10 })[rec.t] || 10;
    game.points += rec.p;
    if (game.lastWon !== todayStr) {
      game.streak = game.lastWon === fmt(addDays(today, -1)) ? game.streak + 1 : 1;
      game.lastWon = todayStr;
    }
    game.best = Math.max(game.best, game.streak);
  } else if (rec.t >= pz.max) { rec.o = true; }
  saveGame(); renderGame();

  const card = document.querySelector('#view-games .game-card');
  if (ok) { showToast(`Correct! +${rec.p} points`); buzz(HAPTIC.success); }
  else {
    buzz(HAPTIC.warn);
    card?.classList.add('shake'); setTimeout(() => card?.classList.remove('shake'), 450);
    if (!rec.o) document.getElementById('gIn')?.focus();
  }
}
document.getElementById('view-games').addEventListener('click', e => {
  if (e.target.closest('#gGo')) submitGuess(document.getElementById('gIn').value);
  const o = e.target.closest('.mc-opt'); if (o && !o.disabled) submitGuess(o.dataset.i);
});
document.getElementById('view-games').addEventListener('keydown', e => {
  if (e.key === 'Enter' && e.target.id === 'gIn') submitGuess(e.target.value);
});


// ══ ZIP — daily path puzzle + online leaderboard ═══════════════════════════════
// Draw ONE line that starts at 1, visits the numbers in order, and fills every square.
const ZIP_CONFIG = {
  supabaseUrl: 'https://pitlhetodizqnvtucfsk.supabase.co',   // e.g. 'https://abcdxyz.supabase.co'   (leave empty = leaderboard off)
  supabaseAnonKey: 'sb_publishable_KvhzU0SEhBEf8md0x_90gQ_NVmlhgGk',   // the PUBLIC anon / publishable key — safe to keep in this file
  size: 6,               // 6 → 6×6 board
  checkpoints: 7,        // how many numbers appear on the board
  tzOffsetMin: 330       // clock that decides "today" for everyone: 330 = India (UTC+5:30)
};
const zipOnlineReady = () => !!(ZIP_CONFIG.supabaseUrl && ZIP_CONFIG.supabaseAnonKey);

const zipFresh = (deviceId) => ({ deviceId: deviceId || zipNewId(), name: '', days: {}, streak: 0, best: 0, lastWon: null });
function zipNewId() {
  if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => { const r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 3 | 8)).toString(16); });
}
let zip = Object.assign(zipFresh(''), load('ht5_zip', {}));
if (typeof zip.days !== 'object' || !zip.days) zip.days = {};
Object.keys(zip.days).forEach(d => { const r = zip.days[d]; if (!r || !Number.isFinite(r.ms)) delete zip.days[d]; });
if (typeof zip.name !== 'string') zip.name = '';
['streak', 'best'].forEach(k => { if (!Number.isFinite(zip[k])) zip[k] = 0; });
if (!zip.deviceId) zip.deviceId = zipNewId();
const saveZip = () => store('ht5_zip', zip);
saveZip();

// ── dates (one shared clock for everyone) ─────────────────────────────────────
const zipDay = () => new Date(Date.now() + ZIP_CONFIG.tzOffsetMin * 60000).toISOString().slice(0, 10);
const dayShift = (ds, n) => { const [y, m, d] = ds.split('-').map(Number); return new Date(Date.UTC(y, m - 1, d + n)).toISOString().slice(0, 10); };
const zFmt = ms => `${Math.floor(ms / 60000)}:${p(Math.floor(ms / 1000) % 60)}.${Math.floor(ms % 1000 / 100)}`;

// ── puzzle generator: random Hamiltonian path ("backbite"), same for everyone on a given day ──
function zipPuzzle(ds) {
  const N = ZIP_CONFIG.size, T = N * N, K = ZIP_CONFIG.checkpoints;
  const rnd = mulberry32(dayNumOf(ds) * 104729 + 7);
  let path = [];
  for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) path.push(r * N + (r % 2 ? N - 1 - c : c));   // start from a snake
  const nbrs = i => {
    const r = Math.floor(i / N), c = i % N, o = [];
    if (r > 0) o.push(i - N); if (r < N - 1) o.push(i + N); if (c > 0) o.push(i - 1); if (c < N - 1) o.push(i + 1); return o;
  };
  for (let it = 0; it < 1500; it++) {
    if (it % 2) path.reverse();
    const end = path[T - 1], prev = path[T - 2], opts = nbrs(end).filter(x => x !== prev);
    const k = path.indexOf(opts[Math.floor(rnd() * opts.length)]);
    path = path.slice(0, k + 1).concat(path.slice(k + 1).reverse());
    if (it % 2) path.reverse();
  }
  const idx = [0];
  for (let i = 1; i < K - 1; i++) {
    const base = Math.round(i * (T - 1) / (K - 1)) + Math.floor(rnd() * 5) - 2;
    idx.push(Math.max(idx[i - 1] + 2, Math.min(base, T - 1 - 2 * (K - 1 - i))));
  }
  idx.push(T - 1);
  const nums = {}; idx.forEach((pi, i) => { nums[path[pi]] = i + 1; });
  return { N, T, nums, max: K, sol: path };
}

// ── game state ────────────────────────────────────────────────────────────────
let Z = { day: null, pz: null, path: [], t0: 0, ms: 0, running: false, playing: false, finished: false, practice: false, dragging: false, editName: false, last: null, finishTimer: null, lb: { state: 'idle', rows: [] } };
function zipInit() {
  const d = zipDay();
  if (Z.day === d && Z.pz) return;
  Z.day = d; Z.pz = zipPuzzle(d); Z.path = []; Z.t0 = 0; Z.ms = 0;
  Z.running = false; Z.playing = false; Z.finished = false; Z.practice = false; Z.dragging = false; Z.last = null;
  Z.lb = { state: 'idle', rows: [] };
}
const zHead = () => Z.path[Z.path.length - 1];
const zNeeded = () => Z.path.filter(c => Z.pz.nums[c]).length + 1;
const zAdj = (a, b) => { const N = Z.pz.N; return Math.abs(Math.floor(a / N) - Math.floor(b / N)) + Math.abs(a % N - b % N) === 1; };

function zCanEnter(c) {
  if (Z.path.includes(c) || !zAdj(zHead(), c)) return false;
  const v = Z.pz.nums[c];
  if (v) { if (v !== zNeeded()) return false; if (v === Z.pz.max && Z.path.length !== Z.pz.T - 1) return false; }
  return true;
}
function zStep(c) {
  const L = Z.path.length;
  if (L >= 2 && c === Z.path[L - 2]) { Z.path.pop(); return true; }   // dragging backwards erases
  if (zCanEnter(c)) { Z.path.push(c); return true; }
  return false;
}
function zMoveTo(target) {            // walks cell-by-cell so fast swipes don't skip squares
  const N = Z.pz.N;
  for (let guard = 0; guard < N && zHead() !== target; guard++) {
    const h = zHead(), hr = Math.floor(h / N), hc = h % N, tr = Math.floor(target / N), tc = target % N;
    let next;
    if (hr === tr) next = h + (tc > hc ? 1 : -1);
    else if (hc === tc) next = h + (tr > hr ? N : -N);
    else break;
    if (!zStep(next)) break;
  }
}
function zDown(c) {
  if (Z.finished) return;
  if (!Z.path.length) { if (Z.pz.nums[c] === 1) Z.path = [c]; return; }   // the line can only start on 1
  const i = Z.path.indexOf(c);
  if (i >= 0) Z.path.length = i + 1;                                       // press an earlier square to rewind to it
}
const zWon = () => Z.path.length === Z.pz.T && Z.pz.nums[zHead()] === Z.pz.max;

// ── play screen: open → timer runs → solved → timer stops, score saved, screen closes ──
function zipPlay(practice) {
  zipInit();
  Z.practice = !!practice; Z.path = []; Z.finished = false; Z.dragging = false; Z.ms = 0;
  Z.t0 = performance.now(); Z.running = true; Z.playing = true;     // the clock starts the moment Play is pressed
  renderZipPlay();
  document.getElementById('zipOverlay').classList.add('open');
  document.documentElement.classList.add('no-scroll');
}
function zipClose() {
  clearTimeout(Z.finishTimer);
  Z.running = false; Z.playing = false; Z.dragging = false;
  document.getElementById('zipOverlay').classList.remove('open');
  document.documentElement.classList.remove('no-scroll');
}
function zFinish() {
  Z.running = false; Z.finished = true; Z.dragging = false;
  Z.ms = Math.round(performance.now() - Z.t0);
  const first = !Z.practice && !zip.days[Z.day];
  if (first) {
    zip.days[Z.day] = { ms: Z.ms, sent: false };
    zip.streak = zip.lastWon === dayShift(Z.day, -1) ? zip.streak + 1 : 1;
    zip.lastWon = Z.day; zip.best = Math.max(zip.best, zip.streak);
    game.points += 30; saveGame(); saveZip();
    showToast(`Solved in ${zFmt(Z.ms)} · +30 points`);
  } else showToast(Z.practice ? `Practice run: ${zFmt(Z.ms)}` : `Solved in ${zFmt(Z.ms)}`, 'info');
  Z.last = { ms: Z.ms, practice: Z.practice, counted: first };
  buzz(HAPTIC.success);
  zDraw();
  Z.finishTimer = setTimeout(() => {                                  // brief pause so the finished line is visible
    zipClose(); renderZip();
    if (first) zipSubmitPending();
  }, 800);
}

// ── online leaderboard (Supabase REST) ────────────────────────────────────────
function zHeaders(extra) {
  const k = ZIP_CONFIG.supabaseAnonKey, h = { apikey: k, 'Content-Type': 'application/json' };
  if (k.startsWith('eyJ')) h.Authorization = 'Bearer ' + k;     // legacy JWT keys; new "publishable" keys go in apikey only
  return Object.assign(h, extra);
}
let zipSending = false;
async function zipSubmitPending() {
  if (zipSending || !zipOnlineReady() || !zip.name || !navigator.onLine) return;
  zipSending = true;
  try {
    for (const [day, r] of Object.entries(zip.days)) {
      if (r.sent) continue;
      if (day < dayShift(zipDay(), -1)) { r.sent = true; continue; }          // too old to be accepted
      try {
        const res = await fetch(`${ZIP_CONFIG.supabaseUrl}/rest/v1/zip_scores`, {
          method: 'POST', headers: zHeaders({ Prefer: 'return=minimal' }),
          body: JSON.stringify({ day, device_id: zip.deviceId, name: zip.name, ms: r.ms })
        });
        if (res.ok || (res.status >= 400 && res.status < 500)) r.sent = true;   // 409 = already there; other 4xx = rejected, don't retry forever
      } catch (e) { break; }                                                    // offline — try again later
    }
    saveZip();
  } finally { zipSending = false; }
  if (curTab === 'games' && gameSub === 'zip') { renderZipExtras(); zipLoadBoard(); }
}
async function zipLoadBoard() {
  if (!zipOnlineReady()) { Z.lb.state = 'off'; renderZipLb(); return; }
  Z.lb.state = 'loading'; renderZipLb();
  try {
    const res = await fetch(`${ZIP_CONFIG.supabaseUrl}/rest/v1/zip_scores?day=eq.${Z.day}&select=name,ms&order=ms.asc,created_at.asc&limit=25`,
      { headers: zHeaders(), cache: 'no-store' });
    if (!res.ok) throw new Error(res.status);
    Z.lb.rows = await res.json(); Z.lb.state = 'ok';
  } catch (e) { Z.lb.state = navigator.onLine ? 'error' : 'offline'; }
  renderZipLb(); renderZipHero();
}
window.addEventListener('online', () => zipSubmitPending());

// ── rendering ─────────────────────────────────────────────────────────────────
function zipRank() {
  const mine = zip.days[Z.day]; if (!mine || Z.lb.state !== 'ok') return null;
  const i = Z.lb.rows.findIndex(r => r.name === zip.name && r.ms === mine.ms);
  return i >= 0 ? i + 1 : null;
}
function renderZipHero() {
  const el = document.getElementById('zipHero'); if (!el) return;
  const mine = zip.days[Z.day], rk = zipRank();
  const st = (zip.lastWon === Z.day || zip.lastWon === dayShift(Z.day, -1)) ? zip.streak : 0;
  el.innerHTML = `
    ${ghStat('bolt', 'gold', mine ? zFmt(mine.ms) : '—', 'Today')}
    ${ghStat('local_fire_department', 'fire', st, 'Zip streak')}
    ${ghStat('workspace_premium', 'amber', rk ? '#' + rk : '—', 'Rank')}`;
  countUps(el);
}

// Zip tab: stats, Play button, leaderboard
function renderZip() {
  zipInit();
  const root = document.getElementById('gZip'), N = Z.pz.N, mine = zip.days[Z.day];
  root.innerHTML = `
    <div class="game-hero" id="zipHero"></div>
    <div class="game-card zip-card${mine ? ' solved' : ''}">
      <div class="gc-top"><span class="gc-chip">Zip · ${N}×${N}</span><span class="gc-chip">${mine ? ic('check') + 'Solved today' : 'Daily puzzle'}</span></div>
      <p class="gc-q">${mine ? 'Nice work today!' : 'Connect the numbers in order'}</p>
      <p class="gc-sub">Draw one line from 1 through every number, filling every square. The timer starts when you press Play and stops the moment you finish.</p>
      <div class="zip-actions"><button class="btn-save zip-play" data-z="${mine ? 'practice' : 'play'}">${mine ? 'Practice (not scored)' : '▶  Play'}</button></div>
      <div id="zipExtras"></div>
    </div>
    <div class="sec-lbl hist-lbl">Today’s leaderboard</div>
    <div class="zip-lb" id="zipLb"></div>`;
  renderZipHero(); renderZipExtras(); renderZipLb();
  if (zipOnlineReady() && Z.lb.state === 'idle') { zipSubmitPending(); zipLoadBoard(); }
}
function renderZipExtras() {
  const el = document.getElementById('zipExtras'); if (!el) return;
  const mine = zip.days[Z.day];
  let h = '';
  if (mine) h += `<div class="gc-result win"><b>Solved in ${zFmt(mine.ms)}</b><span>Your time for today is locked in</span></div>
                 <div class="gc-next">New puzzle in <b id="zipCount">--:--:--</b></div>`;
  if (Z.last && Z.last.practice) h += `<p class="gc-sub">Last practice run: ${zFmt(Z.last.ms)}</p>`;
  if (zipOnlineReady()) {
    if ((!zip.name && mine) || Z.editName) {
      h += `<div class="zip-name"><p class="gc-sub">${zip.name ? 'Change your display name' : 'Pick a name for the leaderboard'}</p>
        <div class="game-form"><input class="modal-input" id="zipNameIn" maxlength="16" autocomplete="off" placeholder="2–16 letters or numbers" value="${esc(zip.name)}"><button class="btn-save" data-z="name">Save</button></div>
        <div class="modal-err" id="zipNameErr"></div></div>`;
    } else if (zip.name) {
      h += `<p class="gc-sub zip-who">Playing as <b>${esc(zip.name)}</b> · <a href="#" data-z="rename">change</a></p>`;
    }
    if (mine && !mine.sent) h += `<p class="gc-sub">${zip.name ? 'Score saved on this phone — it uploads as soon as you’re online.' : 'Score saved on this phone — add a name to post it.'}</p>`;
  }
  el.innerHTML = h;
  zipTick();
}
function renderZipLb() {
  const el = document.getElementById('zipLb'); if (!el) return;
  const s = Z.lb.state, mine = zip.days[Z.day];
  let h;
  if (!zipOnlineReady()) h = `<div class="zip-lb-msg">The online leaderboard isn’t switched on yet.</div>`;
  else if (s === 'idle' || s === 'loading') h = `<div class="zip-lb-msg">Loading scores…</div>`;
  else if (s === 'offline') h = `<div class="zip-lb-msg">You’re offline — the leaderboard needs internet.<br><button class="chip-btn" data-z="refresh">Try again</button></div>`;
  else if (s === 'error') h = `<div class="zip-lb-msg">Couldn’t load scores right now.<br><button class="chip-btn" data-z="refresh">Try again</button></div>`;
  else if (!Z.lb.rows.length) h = `<div class="zip-lb-msg">No scores yet today — be the first!</div>`;
  else h = Z.lb.rows.map((r, i) => {
    const me = mine && r.name === zip.name && r.ms === mine.ms;
    return `<div class="lb-row${me ? ' me' : ''}"><span class="lb-rk">${(i < 3 ? ic('workspace_premium', null, 'medal m' + (i + 1)) : '') || i + 1}</span><span class="lb-nm"><span class="lb-name">${esc(r.name)}</span>${me ? '<em>you</em>' : ''}</span><span class="lb-ms">${zFmt(r.ms)}</span></div>`;
  }).join('') + `<div class="zip-lb-foot"><button class="chip-btn" data-z="refresh">Refresh</button></div>`;
  el.innerHTML = h;
}

// Full-screen play screen
function renderZipPlay() {
  const ov = document.getElementById('zipOverlay'), pz = Z.pz, N = pz.N;
  const cells = Array.from({ length: pz.T }, (_, i) => `<div class="zc" data-i="${i}">${pz.nums[i] ? `<span class="zn">${pz.nums[i]}</span>` : ''}</div>`).join('');
  ov.innerHTML = `
    <div class="zp-top">
      <button class="zp-close" data-z="close" aria-label="Quit this run"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
      <span class="gc-chip">Zip · ${N}×${N}${Z.practice ? ' · practice' : ''}</span>
      <span class="zip-timer" id="zipTimer">0:00.0</span>
    </div>
    <p class="zip-help" id="zipHelp"></p>
    <div class="zp-stage"><div class="zip-board" id="zipBoard" style="--n:${N}">${cells}<svg viewBox="0 0 ${N} ${N}" aria-hidden="true"><polyline points="" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
    <div class="zip-actions">
      <button class="btn-cancel" data-z="restart">Restart line</button>
      <button class="btn-cancel" data-z="undo">Undo step</button>
    </div>`;
  zDraw();
}
function zDraw() {
  Z.nHit = Z.path.filter(c => Z.pz.nums[c]).length;
  const board = document.getElementById('zipBoard'); if (!board) return;
  const N = Z.pz.N, inPath = new Set(Z.path), h = zHead();
  board.querySelectorAll('.zc').forEach(el => {
    const i = +el.dataset.i;
    el.classList.toggle('on', inPath.has(i));
    el.classList.toggle('head', i === h && !Z.finished);
    el.querySelector('.zn')?.classList.toggle('hit', inPath.has(i));
  });
  board.querySelector('polyline').setAttribute('points', Z.path.map(i => `${i % N + .5},${Math.floor(i / N) + .5}`).join(' '));
  const help = document.getElementById('zipHelp');
  if (help) help.textContent = Z.finished ? `✓ Solved in ${zFmt(Z.ms)}`
    : !Z.path.length ? 'Press on 1, then drag through the numbers in order. Fill every square.'
      : `Next: ${zNeeded()} · ${Z.pz.T - Z.path.length} squares left`;
  const t = document.getElementById('zipTimer'); if (t && Z.finished) t.textContent = zFmt(Z.ms);
}

// countdown to the next puzzle (uses the shared clock, not the phone's midnight)
function zipTick() {
  const now = Date.now(), off = ZIP_CONFIG.tzOffsetMin * 60000;
  if (Z.day && zipDay() !== Z.day && curTab === 'games' && gameSub === 'zip' && !Z.playing) { renderZip(); return; }
  const el = document.getElementById('zipCount'); if (!el) return;
  const s = Math.max(0, Math.floor(((Math.floor((now + off) / 864e5) + 1) * 864e5 - off - now) / 1000));
  el.textContent = `${p(Math.floor(s / 3600))}:${p(Math.floor(s % 3600 / 60))}:${p(s % 60)}`;
}
setInterval(zipTick, 1000);

// live timer
setInterval(() => {
  if (!Z.running) return;
  const t = document.getElementById('zipTimer'); if (t) t.textContent = zFmt(performance.now() - Z.t0);
}, 100);

// ── input ─────────────────────────────────────────────────────────────────────
function zCellAt(board, e) {
  const r = board.getBoundingClientRect(), N = Z.pz.N;
  const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
  if (!(x >= 0 && y >= 0 && x < 1 && y < 1)) return -1;
  return Math.floor(y * N) * N + Math.floor(x * N);
}
function zAfter() {
  const k = Z.path.filter(c => Z.pz.nums[c]).length;
  if (k > (Z.nHit || 0)) buzz(HAPTIC.tick);          // light tick each time you reach a number
  zDraw(); if (!Z.finished && zWon()) zFinish();
}

// play screen: draw with finger / mouse (the screen can't scroll, so touches are never "stolen")
function zipBindPlay() {
  const ov = document.getElementById('zipOverlay');
  ov.addEventListener('pointerdown', e => {
    const b = e.target.closest('#zipBoard'); if (!b || Z.finished) return;
    const c = zCellAt(b, e); if (c < 0) return;
    e.preventDefault(); b.setPointerCapture && b.setPointerCapture(e.pointerId);
    Z.dragging = true; zDown(c); zAfter();
  });
  ov.addEventListener('pointermove', e => {
    if (!Z.dragging || Z.finished || !Z.path.length) return;
    const b = document.getElementById('zipBoard'); if (!b) return;
    const c = zCellAt(b, e); if (c < 0) return;
    zMoveTo(c); zAfter();
  });
  const stop = () => { Z.dragging = false; };
  ov.addEventListener('pointerup', stop); ov.addEventListener('pointercancel', stop);
  ov.addEventListener('click', e => {
    const b = e.target.closest('[data-z]'); if (!b) return;
    if (b.dataset.z === 'close') zipClose();
    else if (b.dataset.z === 'restart' && !Z.finished) { Z.path = []; zDraw(); }     // the clock keeps running
    else if (b.dataset.z === 'undo' && !Z.finished && Z.path.length > 1) { Z.path.pop(); zDraw(); }
  });
}
zipBindPlay();

// Zip tab buttons
function zipBind() {
  const g = document.getElementById('gZip');
  g.addEventListener('click', e => {
    const b = e.target.closest('[data-z]'); if (!b) return;
    e.preventDefault();
    switch (b.dataset.z) {
      case 'play': zipPlay(false); break;
      case 'practice': zipPlay(true); break;
      case 'refresh': zipLoadBoard(); break;
      case 'rename': Z.editName = true; renderZipExtras(); document.getElementById('zipNameIn')?.focus(); break;
      case 'name': {
        const v = document.getElementById('zipNameIn').value.trim(), err = document.getElementById('zipNameErr');
        if (!/^[\p{L}\p{N} _.-]{2,16}$/u.test(v)) { err.textContent = 'Use 2–16 letters, numbers, spaces, _ . or -'; return; }
        zip.name = v; saveZip(); Z.editName = false; renderZipExtras(); zipSubmitPending(); break;
      }
    }
  });
  g.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.id === 'zipNameIn') g.querySelector('[data-z=name]').click(); });
}

// ── Games tab: Mind puzzle | Zip ──────────────────────────────────────────────
let gameSub = localStorage.getItem('ht5_gsub') === 'zip' ? 'zip' : 'mind';
function renderGames() {
  const root = document.getElementById('view-games');
  if (!document.getElementById('gMind')) {
    root.innerHTML = `<div class="sub-seg" id="gSeg"><button data-sub="mind">${ic('extension')}Mind puzzle</button><button data-sub="zip">${ic('bolt')}Zip</button></div><div id="gMind"></div><div id="gZip"></div>`;
    document.getElementById('gSeg').addEventListener('click', e => {
      const b = e.target.closest('[data-sub]'); if (!b) return;
      gameSub = b.dataset.sub; try { localStorage.setItem('ht5_gsub', gameSub); } catch (err) { }
      renderGames();
    });
    zipBind();
  }
  document.querySelectorAll('#gSeg button').forEach(b => b.classList.toggle('sel', b.dataset.sub === gameSub));
  document.getElementById('gMind').hidden = gameSub !== 'mind';
  document.getElementById('gZip').hidden = gameSub !== 'zip';
  if (gameSub === 'mind') renderGame(); else renderZip();
}


// ══════════════════════════════════════════════════════════════════════════════
//  WORKOUT / EXERCISE PLANNER & STOPWATCH MODULE
// ══════════════════════════════════════════════════════════════════════════════

// ── Web Audio API Synthesizer (Beeps for last 5s & completion chime) ──────────
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) audioCtx = new AudioCtx();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => { });
  }
  return audioCtx;
}

function playBeep(freq = 880, duration = 0.12, type = 'sine', volume = 0.45) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(volume, ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  } catch (e) { }
}

function playWarningBeep() {
  // Beep for each of the last 5 seconds (5, 4, 3, 2, 1)
  playBeep(850, 0.12, 'sine', 0.4);
  buzz(HAPTIC.tick);
}

function playCompletionBeep() {
  // Dual-tone victory chime when timer hits 0
  try {
    const ctx = getAudioContext();
    if (!ctx) { buzz(HAPTIC.success); return; }
    const now = ctx.currentTime;
    const osc1 = ctx.createOscillator(), g1 = ctx.createGain();
    osc1.frequency.setValueAtTime(1046.5, now);
    g1.gain.setValueAtTime(0.001, now);
    g1.gain.exponentialRampToValueAtTime(0.5, now + 0.02);
    g1.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
    osc1.connect(g1); g1.connect(ctx.destination);
    osc1.start(now); osc1.stop(now + 0.18);

    const osc2 = ctx.createOscillator(), g2 = ctx.createGain();
    osc2.frequency.setValueAtTime(1318.5, now + 0.15);
    g2.gain.setValueAtTime(0.001, now + 0.15);
    g2.gain.exponentialRampToValueAtTime(0.55, now + 0.17);
    g2.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    osc2.connect(g2); g2.connect(ctx.destination);
    osc2.start(now + 0.15); osc2.stop(now + 0.45);
    buzz(HAPTIC.success);
  } catch (e) {
    playBeep(1200, 0.4, 'sine', 0.5);
    buzz(HAPTIC.success);
  }
}

// ── Exercise Categories & Weekdays ─────────────────────────────────────────────
const EX_CATEGORIES = {
  chest: { l: 'Chest', e: 'fitness_center', c: '#e0975a' },
  back: { l: 'Back', e: 'fitness_center', c: '#5b84b1' },
  legs: { l: 'Legs', e: 'directions_run', c: '#6fae8a' },
  shoulders: { l: 'Shoulders', e: 'fitness_center', c: '#a07cc0' },
  arms: { l: 'Arms', e: 'fitness_center', c: '#c9738f' },
  core: { l: 'Core', e: 'self_improvement', c: '#6aa6d6' },
  cardio: { l: 'Cardio', e: 'directions_bike', c: '#d9776a' },
  recovery: { l: 'Mobility / Rest', e: 'grass', c: '#4fa3a5' }
};

const WEEK_DAYS = [
  { key: 'mon', name: 'Monday', short: 'Mon' },
  { key: 'tue', name: 'Tuesday', short: 'Tue' },
  { key: 'wed', name: 'Wednesday', short: 'Wed' },
  { key: 'thu', name: 'Thursday', short: 'Thu' },
  { key: 'fri', name: 'Friday', short: 'Fri' },
  { key: 'sat', name: 'Saturday', short: 'Sat' },
  { key: 'sun', name: 'Sunday', short: 'Sun' }
];
const DAY_INDEX_MAP = { 0: 'sun', 1: 'mon', 2: 'tue', 3: 'wed', 4: 'thu', 5: 'fri', 6: 'sat' };
const getTodayDayKey = () => DAY_INDEX_MAP[today.getDay()] || 'mon';
const minToSecStr = s => `${p(Math.floor(s / 60))}:${p(s % 60)}`;

// Starter 7-Day Workout Plans (5 exercises each, 3 sets each, 40s duration)
const DEFAULT_WORKOUT_DATA = {
  plans: {
    mon: {
      focus: 'Chest & Triceps',
      exercises: [
        { id: 'ex_m1', name: 'Standard Push-ups', sets: 3, duration: 40, reps: '12-15 reps', rest: 20, category: 'chest' }
      ]
    },
    tue: {
      focus: 'Back & Biceps',
      exercises: [
        { id: 'ex_t1', name: 'Pull-ups / Inverted Rows', sets: 3, duration: 40, reps: '8-10 reps', rest: 20, category: 'back' }
      ]
    },
    wed: {
      focus: 'Legs & Calves',
      exercises: [
        { id: 'ex_w1', name: 'Bodyweight Squats', sets: 3, duration: 40, reps: '15-20 reps', rest: 20, category: 'legs' }
      ]
    },
    thu: {
      focus: 'Shoulders & Core',
      exercises: [
        { id: 'ex_th1', name: 'Pike Push-ups / Overhead Press', sets: 3, duration: 40, reps: '10-12 reps', rest: 20, category: 'shoulders' }
      ]
    },
    fri: {
      focus: 'Full Body HIIT',
      exercises: [
        { id: 'ex_f1', name: 'Jumping Jacks', sets: 3, duration: 40, reps: 'Fast pace', rest: 20, category: 'cardio' }
      ]
    },
    sat: {
      focus: 'Mobility & Recovery',
      exercises: [
        { id: 'ex_s1', name: 'Dynamic Arm & Leg Swings', sets: 3, duration: 40, reps: 'Smooth', rest: 15, category: 'recovery' }
      ]
    },
    sun: {
      focus: 'Rest & Core Tune-up',
      exercises: [
        { id: 'ex_su1', name: 'Bird Dog', sets: 3, duration: 40, reps: '10 each side', rest: 20, category: 'core' }
      ]
    }
  },
  log: {}
};

function cleanWorkoutData(raw) {
  if (!raw || typeof raw !== 'object') raw = {};
  const plans = {};
  WEEK_DAYS.forEach(d => {
    const p = raw.plans && raw.plans[d.key];
    const def = DEFAULT_WORKOUT_DATA.plans[d.key];
    plans[d.key] = {
      focus: (p && typeof p.focus === 'string') ? p.focus : def.focus,
      exercises: (p && Array.isArray(p.exercises))
        ? p.exercises.map(e => ({
          id: e.id || uid(),
          name: String(e.name || 'Exercise').slice(0, 50),
          sets: Math.max(1, Math.min(20, Number(e.sets) || 3)),
          duration: Math.max(5, Math.min(600, Number(e.duration) || 40)),
          rest: Math.max(0, Math.min(300, Number(e.rest) ?? 20)),
          reps: String(e.reps || ''),
          category: EX_CATEGORIES[e.category] ? e.category : 'chest'
        }))
        : def.exercises.map(e => ({ ...e }))
    };
  });
  const log = (raw.log && typeof raw.log === 'object') ? raw.log : {};
  return { plans, log };
}

let workoutData = cleanWorkoutData(load('ht5_workout', null));
const saveWorkout = () => store('ht5_workout', workoutData);
let selectedWorkoutDay = getTodayDayKey();
// Routine list open/closed (remembered between visits)
let exListOpen = (() => { try { return localStorage.getItem('ht_ex_list_open') !== '0'; } catch (e) { return true; } })();

// ── Workout Timer & Stopwatch State ────────────────────────────────────────────
let workoutTimer = {
  mode: 'timer',              // 'timer' (exercise countdown) or 'stopwatch' (count up)
  status: 'idle',             // 'idle', 'running', 'paused', 'rest'
  exerciseId: '',             // filled by syncTimerToDay() with the first exercise of the selected day
  exerciseName: '',
  currentSet: 1,
  totalSets: 3,
  targetDuration: 40,
  timeLeft: 40,
  restDuration: 20,
  restLeft: 20,
  sound: true,
  timerInterval: null,
  // Alternating / Superset mode
  isAlternating: false,
  altExA: '',
  altExB: '',
  altActive: 'A',             // 'A' or 'B'
  // Stopwatch
  swStart: 0,
  swElapsed: 0,
  swRunning: false,
  swInterval: null,
  swLaps: []
};

function getAltExercise(slot) {
  const plan = workoutData.plans[selectedWorkoutDay];
  if (!plan || !plan.exercises) return null;
  const id = slot === 'A' ? workoutTimer.altExA : workoutTimer.altExB;
  return plan.exercises.find(x => x.id === id) || null;
}

// Point the timer at the selected day's first exercise.
// force=true  -> always jump to the first exercise (used when the user switches day)
// force=false -> only if the timer's current exercise isn't part of that day's plan
// A timer that is running / paused / resting is never interrupted.
function syncTimerToDay(force = false) {
  if (workoutTimer.status !== 'idle') return;
  const exs = workoutData.plans[selectedWorkoutDay]?.exercises || [];
  if (!exs.length) return;
  const current = exs.find(x => x.id === workoutTimer.exerciseId);
  if (current && !force) return;
  const ex = exs[0];
  workoutTimer.exerciseId = ex.id;
  workoutTimer.exerciseName = ex.name;
  workoutTimer.totalSets = ex.sets || 3;
  workoutTimer.targetDuration = ex.duration || 40;
  workoutTimer.timeLeft = ex.duration || 40;
  workoutTimer.restDuration = ex.rest ?? 20;
  workoutTimer.restLeft = ex.rest ?? 20;
  workoutTimer.currentSet = 1;
  if (workoutTimer.isAlternating) setupAlternatingMode(ex.id, exs[1]?.id);
}

function setupAlternatingMode(exIdA, exIdB) {
  workoutTimer.isAlternating = true;
  const plan = workoutData.plans[selectedWorkoutDay];
  const exercises = plan?.exercises || [];
  workoutTimer.altExA = exIdA || (exercises[0] ? exercises[0].id : '');
  workoutTimer.altExB = exIdB || (exercises.find(x => x.id !== workoutTimer.altExA)?.id || (exercises[1] ? exercises[1].id : workoutTimer.altExA));
  workoutTimer.altActive = 'A';
  const exA = exercises.find(x => x.id === workoutTimer.altExA);
  if (exA) {
    workoutTimer.exerciseId = exA.id;
    workoutTimer.exerciseName = exA.name;
    workoutTimer.totalSets = exA.sets || 3;
    workoutTimer.targetDuration = exA.duration || 40;
    workoutTimer.timeLeft = exA.duration || 40;
    workoutTimer.restDuration = exA.rest ?? 20;
    workoutTimer.restLeft = exA.rest ?? 20;
  }
  workoutTimer.currentSet = 1;
  workoutTimer.status = 'idle';
  clearInterval(workoutTimer.timerInterval);
  workoutTimer.timerInterval = null;
}

function adjustExerciseSets(exId, delta) {
  const plan = workoutData.plans[selectedWorkoutDay];
  if (!plan || !plan.exercises) return;
  const ex = plan.exercises.find(x => x.id === exId);
  if (!ex) return;
  const newSets = Math.max(1, Math.min(20, (ex.sets || 3) + delta));
  if (newSets === ex.sets) return;
  ex.sets = newSets;
  if (workoutTimer.exerciseId === exId || workoutTimer.altExA === exId || workoutTimer.altExB === exId) {
    workoutTimer.totalSets = newSets;
    if (workoutTimer.currentSet > newSets) workoutTimer.currentSet = newSets;
  }
  buzz(HAPTIC.tick);
  saveWorkout();
  renderWorkout();
}

function adjustTimerSets(delta) {
  const newSets = Math.max(1, Math.min(20, (workoutTimer.totalSets || 3) + delta));
  setTimerTotalSets(newSets);
}

function setTimerTotalSets(count) {
  workoutTimer.totalSets = Math.max(1, Math.min(20, count));
  if (workoutTimer.currentSet > workoutTimer.totalSets) {
    workoutTimer.currentSet = workoutTimer.totalSets;
  }
  const plan = workoutData.plans[selectedWorkoutDay];
  if (plan && plan.exercises) {
    if (workoutTimer.isAlternating) {
      const exA = plan.exercises.find(x => x.id === workoutTimer.altExA);
      const exB = plan.exercises.find(x => x.id === workoutTimer.altExB);
      if (exA) exA.sets = workoutTimer.totalSets;
      if (exB) exB.sets = workoutTimer.totalSets;
    } else {
      const ex = plan.exercises.find(x => x.id === workoutTimer.exerciseId);
      if (ex) ex.sets = workoutTimer.totalSets;
    }
    saveWorkout();
  }
  buzz(HAPTIC.tick);
  renderWorkout();
}

function formatStopwatch(ms) {
  const totalSec = Math.floor(ms / 1000);
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  const d = Math.floor((ms % 1000) / 100);
  return `${p(m)}:${p(s)}.${d}`;
}

function updateTimerDisplayOnly() {
  const digitsEl = document.getElementById('wtDigits');
  const chipEl = document.getElementById('wtStatusChip');
  const mainBtn = document.getElementById('wtBtnMain');
  const setEl = document.getElementById('wtExSet');
  const nameEl = document.getElementById('wtExName');

  if (digitsEl) {
    if (workoutTimer.mode === 'stopwatch') {
      digitsEl.textContent = formatStopwatch(workoutTimer.swElapsed);
      digitsEl.classList.remove('pulse-warn');
    } else {
      const isRest = workoutTimer.status === 'rest';
      const displaySec = isRest ? workoutTimer.restLeft : workoutTimer.timeLeft;
      digitsEl.textContent = minToSecStr(displaySec);
      if (!isRest && workoutTimer.status === 'running' && workoutTimer.timeLeft <= 5 && workoutTimer.timeLeft > 0) {
        digitsEl.classList.add('pulse-warn');
      } else {
        digitsEl.classList.remove('pulse-warn');
      }
    }
  }

  if (chipEl) {
    if (workoutTimer.mode === 'stopwatch') {
      chipEl.textContent = workoutTimer.swRunning ? 'RUNNING' : 'STOPWATCH';
      chipEl.className = `wt-status-chip ${workoutTimer.swRunning ? 'work' : 'ready'}`;
    } else {
      if (workoutTimer.status === 'rest') {
        chipEl.textContent = 'REST TIME';
        chipEl.className = 'wt-status-chip rest';
      } else if (workoutTimer.status === 'running') {
        chipEl.textContent = 'WORK';
        chipEl.className = 'wt-status-chip work';
      } else if (workoutTimer.status === 'paused') {
        chipEl.textContent = 'PAUSED';
        chipEl.className = 'wt-status-chip ready';
      } else {
        chipEl.textContent = 'READY';
        chipEl.className = 'wt-status-chip ready';
      }
    }
  }

  if (mainBtn) {
    const isRunning = (workoutTimer.mode === 'timer')
      ? (workoutTimer.status === 'running' || workoutTimer.status === 'rest')
      : workoutTimer.swRunning;
    mainBtn.classList.toggle('running', isRunning);
    mainBtn.innerHTML = isRunning
      ? `${ic('pause')} Pause`
      : `${ic('play_arrow')} Start`;
  }

  if (workoutTimer.mode === 'timer') {
    const dots = Array.from({ length: workoutTimer.totalSets }, (_, i) =>
      `<span style="color:${i + 1 <= workoutTimer.currentSet ? 'var(--primary)' : 'var(--sub)'}">${i + 1 === workoutTimer.currentSet ? '●' : '○'}</span>`
    ).join(' ');

    const setsDisplayEl = document.getElementById('wtSetsDisplay');
    if (setsDisplayEl) setsDisplayEl.textContent = workoutTimer.totalSets;

    if (workoutTimer.isAlternating) {
      const curEx = getAltExercise(workoutTimer.altActive);
      const nextEx = getAltExercise(workoutTimer.altActive === 'A' ? 'B' : 'A');
      const curTag = workoutTimer.altActive === 'A' ? 'tag-a' : 'tag-b';
      const curSlot = workoutTimer.altActive === 'A' ? 'Ex 1' : 'Ex 2';
      const nextSlot = workoutTimer.altActive === 'A' ? 'Ex 2' : 'Ex 1';

      if (setEl) {
        setEl.innerHTML = `Round ${workoutTimer.currentSet} of ${workoutTimer.totalSets} &nbsp; ${dots} <span style="font-size:.74rem;opacity:.85;font-weight:700">(${curSlot}: ${esc(curEx?.name || '')})</span>`;
      }
      if (nameEl) {
        nameEl.textContent = `${curSlot}: ${curEx?.name || 'Exercise'}`;
      }
      const altBannerEl = document.getElementById('wtAltBanner');
      if (altBannerEl) {
        altBannerEl.innerHTML = `
          <div class="wt-alt-active-tag ${curTag}">
            <span class="wt-pill-tag ${curTag}">${curSlot}</span>
            ${esc(curEx?.name || 'Exercise')}
          </div>
          <div class="wt-alt-next-tag">Next up: ${esc(nextEx?.name || 'None')} (${nextSlot})</div>
        `;
      }
    } else {
      if (setEl) {
        setEl.innerHTML = `Set ${workoutTimer.currentSet} of ${workoutTimer.totalSets} &nbsp; ${dots}`;
      }
      if (nameEl) {
        nameEl.textContent = workoutTimer.exerciseName || 'Daily Exercise';
      }
    }
  }
}

function tickWorkoutTimer() {
  if (workoutTimer.status === 'running') {
    workoutTimer.timeLeft--;

    // Warning beep on the last 5 seconds (5, 4, 3, 2, 1)
    if (workoutTimer.timeLeft <= 5 && workoutTimer.timeLeft > 0) {
      if (workoutTimer.sound) playWarningBeep();
    }

    if (workoutTimer.timeLeft <= 0) {
      workoutTimer.timeLeft = 0;
      if (workoutTimer.sound) playCompletionBeep();

      if (workoutTimer.isAlternating) {
        const plan = workoutData.plans[selectedWorkoutDay];
        const exA = plan?.exercises?.find(x => x.id === workoutTimer.altExA);
        const exB = plan?.exercises?.find(x => x.id === workoutTimer.altExB);
        const isCurrentA = workoutTimer.altActive === 'A';
        const curEx = isCurrentA ? exA : exB;
        const curExId = isCurrentA ? workoutTimer.altExA : workoutTimer.altExB;
        const nextEx = isCurrentA ? exB : exA;

        // Log current set completed for active exercise
        if (curExId) {
          logExerciseSet(selectedWorkoutDay, curExId, workoutTimer.currentSet);
        }

        if (isCurrentA && exB) {
          // Switch to Ex B after rest
          workoutTimer.status = 'rest';
          workoutTimer.restDuration = curEx?.rest ?? 20;
          workoutTimer.restLeft = workoutTimer.restDuration;
          showToast(`${curEx?.name || 'Ex 1'} set done! Rest, then ${nextEx?.name || 'Ex 2'}.`);
        } else {
          // Completed round (Ex B finished)
          if (workoutTimer.currentSet < workoutTimer.totalSets) {
            workoutTimer.status = 'rest';
            workoutTimer.restDuration = curEx?.rest ?? 20;
            workoutTimer.restLeft = workoutTimer.restDuration;
            showToast(`Round ${workoutTimer.currentSet} completed! Rest time.`);
          } else {
            // Exercise pair completely finished
            workoutTimer.status = 'idle';
            clearInterval(workoutTimer.timerInterval);
            workoutTimer.timerInterval = null;
            workoutTimer.timeLeft = curEx?.duration || 40;
            showToast(`All ${workoutTimer.totalSets} alternating sets completed! Beast mode! 💪🔥`);
            renderWorkout();
            return;
          }
        }
      } else {
        // Single Exercise mode
        logExerciseSet(selectedWorkoutDay, workoutTimer.exerciseId, workoutTimer.currentSet);

        if (workoutTimer.currentSet < workoutTimer.totalSets) {
          workoutTimer.status = 'rest';
          workoutTimer.restLeft = workoutTimer.restDuration;
          showToast(`Set ${workoutTimer.currentSet} completed! Rest time.`);
        } else {
          // Exercise finished!
          workoutTimer.status = 'idle';
          clearInterval(workoutTimer.timerInterval);
          workoutTimer.timerInterval = null;
          workoutTimer.timeLeft = workoutTimer.targetDuration;
          showToast(`Exercise completed! Great work! 💪`);

          // Check if there is another exercise in current day's plan
          const dayPlan = workoutData.plans[selectedWorkoutDay];
          if (dayPlan && dayPlan.exercises) {
            const curIdx = dayPlan.exercises.findIndex(x => x.id === workoutTimer.exerciseId);
            if (curIdx >= 0 && curIdx + 1 < dayPlan.exercises.length) {
              const nextEx = dayPlan.exercises[curIdx + 1];
              loadExerciseIntoTimer(nextEx, false);
            }
          }
        }
      }
    }
  } else if (workoutTimer.status === 'rest') {
    workoutTimer.restLeft--;
    if (workoutTimer.restLeft <= 3 && workoutTimer.restLeft > 0) {
      if (workoutTimer.sound) playWarningBeep();
    }
    if (workoutTimer.restLeft <= 0) {
      if (workoutTimer.isAlternating) {
        const plan = workoutData.plans[selectedWorkoutDay];
        const exA = plan?.exercises?.find(x => x.id === workoutTimer.altExA);
        const exB = plan?.exercises?.find(x => x.id === workoutTimer.altExB);
        if (workoutTimer.altActive === 'A' && exB) {
          workoutTimer.altActive = 'B';
          workoutTimer.exerciseId = exB.id;
          workoutTimer.exerciseName = exB.name;
          workoutTimer.targetDuration = exB.duration || 40;
          workoutTimer.timeLeft = exB.duration || 40;
          workoutTimer.restDuration = exB.rest ?? 20;
          workoutTimer.status = 'running';
          if (workoutTimer.sound) playBeep(980, 0.2, 'sine', 0.45);
          showToast(`Set ${workoutTimer.currentSet}: ${exB.name}! Let's go!`);
        } else {
          workoutTimer.altActive = 'A';
          workoutTimer.currentSet++;
          if (exA) {
            workoutTimer.exerciseId = exA.id;
            workoutTimer.exerciseName = exA.name;
            workoutTimer.targetDuration = exA.duration || 40;
            workoutTimer.timeLeft = exA.duration || 40;
            workoutTimer.restDuration = exA.rest ?? 20;
          }
          workoutTimer.status = 'running';
          if (workoutTimer.sound) playBeep(980, 0.2, 'sine', 0.45);
          showToast(`Round ${workoutTimer.currentSet}: ${exA?.name || 'Ex 1'}! Let's go!`);
        }
      } else {
        workoutTimer.currentSet++;
        workoutTimer.timeLeft = workoutTimer.targetDuration;
        workoutTimer.status = 'running';
        if (workoutTimer.sound) playBeep(980, 0.2, 'sine', 0.45);
        showToast(`Set ${workoutTimer.currentSet} begins! Let's go!`);
      }
    }
  }
  updateTimerDisplayOnly();
}

function startWorkoutTimer() {
  getAudioContext();
  if (workoutTimer.status === 'running') return;

  if (workoutTimer.status === 'idle' && workoutTimer.timeLeft <= 0) {
    workoutTimer.timeLeft = workoutTimer.targetDuration;
  }
  workoutTimer.status = 'running';
  clearInterval(workoutTimer.timerInterval);
  workoutTimer.timerInterval = setInterval(tickWorkoutTimer, 1000);
  buzz(HAPTIC.check);
  updateTimerDisplayOnly();
}

function pauseWorkoutTimer() {
  if (workoutTimer.status === 'running' || workoutTimer.status === 'rest') {
    workoutTimer.status = 'paused';
    clearInterval(workoutTimer.timerInterval);
    workoutTimer.timerInterval = null;
    buzz(HAPTIC.tick);
    updateTimerDisplayOnly();
  }
}

function resetWorkoutTimer() {
  clearInterval(workoutTimer.timerInterval);
  workoutTimer.timerInterval = null;
  workoutTimer.status = 'idle';
  workoutTimer.timeLeft = workoutTimer.targetDuration;
  workoutTimer.restLeft = workoutTimer.restDuration;
  buzz(HAPTIC.undo);
  updateTimerDisplayOnly();
}

function skipOrNextSet() {
  if (workoutTimer.isAlternating) {
    const plan = workoutData.plans[selectedWorkoutDay];
    const exA = plan?.exercises?.find(x => x.id === workoutTimer.altExA);
    const exB = plan?.exercises?.find(x => x.id === workoutTimer.altExB);
    if (workoutTimer.altActive === 'A' && exB) {
      workoutTimer.altActive = 'B';
      workoutTimer.exerciseId = exB.id;
      workoutTimer.exerciseName = exB.name;
      workoutTimer.targetDuration = exB.duration || 40;
      workoutTimer.timeLeft = exB.duration || 40;
      workoutTimer.status = 'idle';
      clearInterval(workoutTimer.timerInterval);
      workoutTimer.timerInterval = null;
      buzz(HAPTIC.tick);
      showToast(`Jumped to Ex 2: ${exB.name} (Round ${workoutTimer.currentSet})`);
    } else {
      if (workoutTimer.currentSet < workoutTimer.totalSets) {
        workoutTimer.currentSet++;
        workoutTimer.altActive = 'A';
        if (exA) {
          workoutTimer.exerciseId = exA.id;
          workoutTimer.exerciseName = exA.name;
          workoutTimer.targetDuration = exA.duration || 40;
          workoutTimer.timeLeft = exA.duration || 40;
        }
        workoutTimer.status = 'idle';
        clearInterval(workoutTimer.timerInterval);
        workoutTimer.timerInterval = null;
        buzz(HAPTIC.tick);
        showToast(`Jumped to Round ${workoutTimer.currentSet}: ${exA?.name || 'Ex 1'}`);
      } else {
        showToast('All alternating sets completed!');
      }
    }
  } else {
    if (workoutTimer.currentSet < workoutTimer.totalSets) {
      workoutTimer.currentSet++;
      workoutTimer.timeLeft = workoutTimer.targetDuration;
      workoutTimer.status = 'idle';
      clearInterval(workoutTimer.timerInterval);
      workoutTimer.timerInterval = null;
      buzz(HAPTIC.tick);
      showToast(`Jumped to Set ${workoutTimer.currentSet}`);
    } else {
      // Jump to next exercise
      const dayPlan = workoutData.plans[selectedWorkoutDay];
      if (dayPlan && dayPlan.exercises) {
        const curIdx = dayPlan.exercises.findIndex(x => x.id === workoutTimer.exerciseId);
        if (curIdx >= 0 && curIdx + 1 < dayPlan.exercises.length) {
          loadExerciseIntoTimer(dayPlan.exercises[curIdx + 1], false);
          showToast(`Next exercise: ${dayPlan.exercises[curIdx + 1].name}`);
          return;
        }
      }
      showToast('All sets completed for this exercise');
    }
  }
  updateTimerDisplayOnly();
}

function loadExerciseIntoTimer(ex, autoStart = false) {
  workoutTimer.exerciseId = ex.id;
  workoutTimer.exerciseName = ex.name;
  workoutTimer.totalSets = ex.sets || 3;
  workoutTimer.currentSet = 1;
  workoutTimer.targetDuration = ex.duration || 40;
  workoutTimer.timeLeft = ex.duration || 40;
  workoutTimer.restDuration = ex.rest ?? 20;
  workoutTimer.restLeft = ex.rest ?? 20;
  workoutTimer.status = 'idle';
  clearInterval(workoutTimer.timerInterval);
  workoutTimer.timerInterval = null;
  workoutTimer.mode = 'timer';

  if (workoutTimer.isAlternating) {
    workoutTimer.altExA = ex.id;
    workoutTimer.altActive = 'A';
    const plan = workoutData.plans[selectedWorkoutDay];
    if (plan && plan.exercises) {
      if (!workoutTimer.altExB || workoutTimer.altExB === ex.id) {
        const other = plan.exercises.find(x => x.id !== ex.id);
        if (other) workoutTimer.altExB = other.id;
      }
    }
  }

  if (autoStart) startWorkoutTimer();
  renderWorkout();
  document.getElementById('workoutTimerCard')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ── Stopwatch controls ────────────────────────────────────────────────────────
function startStopwatch() {
  if (workoutTimer.swRunning) return;
  workoutTimer.swRunning = true;
  workoutTimer.swStart = Date.now() - workoutTimer.swElapsed;
  clearInterval(workoutTimer.swInterval);
  workoutTimer.swInterval = setInterval(() => {
    workoutTimer.swElapsed = Date.now() - workoutTimer.swStart;
    updateTimerDisplayOnly();
  }, 100);
  buzz(HAPTIC.tick);
  updateTimerDisplayOnly();
}

function pauseStopwatch() {
  if (!workoutTimer.swRunning) return;
  workoutTimer.swRunning = false;
  clearInterval(workoutTimer.swInterval);
  workoutTimer.swInterval = null;
  buzz(HAPTIC.tick);
  updateTimerDisplayOnly();
}

function resetStopwatch() {
  workoutTimer.swRunning = false;
  clearInterval(workoutTimer.swInterval);
  workoutTimer.swInterval = null;
  workoutTimer.swElapsed = 0;
  workoutTimer.swLaps = [];
  buzz(HAPTIC.undo);
  renderWorkout();
}

function lapStopwatch() {
  if (!workoutTimer.swRunning && workoutTimer.swElapsed === 0) return;
  workoutTimer.swLaps.unshift(workoutTimer.swElapsed);
  buzz(HAPTIC.tick);
  renderWorkout();
}

// ── Progress & Log Tracking ───────────────────────────────────────────────────
function isExerciseDone(exId) {
  return !!(workoutData.log[todayStr]?.completed?.includes(exId));
}

function getCompletedSets(exId) {
  return workoutData.log[todayStr]?.sets?.[exId] || [];
}

function logExerciseSet(dayKey, exId, setNum) {
  if (!exId) return;
  if (!workoutData.log[todayStr]) workoutData.log[todayStr] = { sets: {}, completed: [] };
  const log = workoutData.log[todayStr];
  log.sets = log.sets || {};
  log.completed = log.completed || [];
  if (!log.sets[exId]) log.sets[exId] = [];
  if (!log.sets[exId].includes(setNum)) log.sets[exId].push(setNum);

  const plan = workoutData.plans[dayKey];
  const ex = plan?.exercises?.find(x => x.id === exId);
  if (ex && log.sets[exId].length >= ex.sets) {
    if (!log.completed.includes(exId)) log.completed.push(exId);
  }
  saveWorkout();
  renderWorkout();
}

function toggleExerciseSet(dayKey, exId, setNum) {
  buzz(HAPTIC.tick);
  if (!workoutData.log[todayStr]) workoutData.log[todayStr] = { sets: {}, completed: [] };
  const log = workoutData.log[todayStr];
  log.sets = log.sets || {};
  log.completed = log.completed || [];
  if (!log.sets[exId]) log.sets[exId] = [];

  const idx = log.sets[exId].indexOf(setNum);
  if (idx >= 0) {
    log.sets[exId].splice(idx, 1);
    log.completed = log.completed.filter(x => x !== exId);
  } else {
    log.sets[exId].push(setNum);
    const plan = workoutData.plans[dayKey];
    const ex = plan?.exercises?.find(x => x.id === exId);
    if (ex && log.sets[exId].length >= ex.sets && !log.completed.includes(exId)) {
      log.completed.push(exId);
      buzz(HAPTIC.success);
    }
  }
  saveWorkout();
  renderWorkout();
}

function toggleExerciseCompletion(dayKey, exId) {
  if (!workoutData.log[todayStr]) workoutData.log[todayStr] = { sets: {}, completed: [] };
  const log = workoutData.log[todayStr];
  log.sets = log.sets || {};
  log.completed = log.completed || [];

  const plan = workoutData.plans[dayKey];
  const ex = plan?.exercises?.find(x => x.id === exId);
  const isDone = log.completed.includes(exId);

  if (isDone) {
    log.completed = log.completed.filter(x => x !== exId);
    delete log.sets[exId];
    buzz(HAPTIC.undo);
  } else {
    log.completed.push(exId);
    if (ex) {
      log.sets[exId] = Array.from({ length: ex.sets }, (_, i) => i + 1);
    }
    buzz(HAPTIC.check);
    if (plan && plan.exercises.every(x => log.completed.includes(x.id))) {
      showToast("All of today's exercises completed! Beast mode! 🔥");
      buzz(HAPTIC.success);
    }
  }
  saveWorkout();
  renderWorkout();
}

// ── Modals: Add / Edit Exercise & Day Focus ────────────────────────────────────
let exModalCtx = { dayKey: 'mon', exId: null };
let exSelectedCat = 'chest';

function renderExCategoryChips() {
  const container = document.getElementById('exCategories');
  if (!container) return;
  container.innerHTML = Object.entries(EX_CATEGORIES).map(([k, cat]) =>
    `<button type="button" class="type-chip${k === exSelectedCat ? ' sel' : ''}" data-cat="${k}" style="--tc:${cat.c}">${ic(cat.e)}${cat.l}</button>`
  ).join('');
}

document.getElementById('exCategories')?.addEventListener('click', e => {
  const b = e.target.closest('[data-cat]');
  if (!b) return;
  exSelectedCat = b.dataset.cat;
  renderExCategoryChips();
});

function openExModal(dayKey, exId = null) {
  exModalCtx = { dayKey, exId };
  const ov = document.getElementById('exerciseOverlay');
  const plan = workoutData.plans[dayKey];
  const ex = exId ? plan?.exercises?.find(x => x.id === exId) : null;
  document.getElementById('exModalTitle').textContent = ex ? 'Edit Exercise' : 'New Exercise';
  document.getElementById('exName').value = ex ? ex.name : '';
  document.getElementById('exSets').value = ex ? ex.sets : 3;
  document.getElementById('exDuration').value = ex ? ex.duration : 40;
  document.getElementById('exRest').value = ex ? (ex.rest ?? 20) : 20;
  document.getElementById('exReps').value = ex ? (ex.reps || '') : '';
  exSelectedCat = ex ? ex.category : 'chest';
  document.getElementById('exErr').textContent = '';
  renderExCategoryChips();
  ov.classList.add('open');
  setTimeout(() => document.getElementById('exName').focus(), 300);
}

function closeExModal() {
  document.getElementById('exerciseOverlay')?.classList.remove('open');
}

document.getElementById('exCancel')?.addEventListener('click', closeExModal);
document.getElementById('exerciseOverlay')?.addEventListener('click', e => {
  if (e.target === document.getElementById('exerciseOverlay')) closeExModal();
});
document.getElementById('exName')?.addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('exSave').click();
});

document.getElementById('exSave')?.addEventListener('click', () => {
  const name = document.getElementById('exName').value.trim();
  const sets = parseInt(document.getElementById('exSets').value, 10);
  const duration = parseInt(document.getElementById('exDuration').value, 10);
  const rest = parseInt(document.getElementById('exRest').value, 10);
  const reps = document.getElementById('exReps').value.trim();
  const err = document.getElementById('exErr');

  if (!name) { err.textContent = 'Give this exercise a name.'; document.getElementById('exName').focus(); return; }
  if (isNaN(sets) || sets < 1 || sets > 30) { err.textContent = 'Sets must be between 1 and 30.'; return; }
  if (isNaN(duration) || duration < 5 || duration > 600) { err.textContent = 'Duration must be between 5s and 600s.'; return; }

  const dayKey = exModalCtx.dayKey;
  if (!workoutData.plans[dayKey]) workoutData.plans[dayKey] = { focus: 'Workout', exercises: [] };
  const exercises = workoutData.plans[dayKey].exercises;

  if (exModalCtx.exId) {
    const existing = exercises.find(x => x.id === exModalCtx.exId);
    if (existing) {
      existing.name = name;
      existing.sets = sets;
      existing.duration = duration;
      existing.rest = isNaN(rest) ? 20 : rest;
      existing.reps = reps;
      existing.category = exSelectedCat;
    }
  } else {
    exercises.push({
      id: uid(),
      name,
      sets,
      duration,
      rest: isNaN(rest) ? 20 : rest,
      reps,
      category: exSelectedCat
    });
  }

  saveWorkout();
  renderWorkout();
  closeExModal();
  showToast(exModalCtx.exId ? 'Exercise updated' : 'Exercise added');
});

// Day Focus modal
let dfDayKey = 'mon';
function openDfModal(dayKey) {
  dfDayKey = dayKey;
  const ov = document.getElementById('dayFocusOverlay');
  const plan = workoutData.plans[dayKey];
  document.getElementById('dfInput').value = plan?.focus || '';
  ov.classList.add('open');
  setTimeout(() => document.getElementById('dfInput').focus(), 300);
}
function closeDfModal() {
  document.getElementById('dayFocusOverlay')?.classList.remove('open');
}
document.getElementById('dfCancel')?.addEventListener('click', closeDfModal);
document.getElementById('dayFocusOverlay')?.addEventListener('click', e => {
  if (e.target === document.getElementById('dayFocusOverlay')) closeDfModal();
});
document.getElementById('dfInput')?.addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('dfSave').click();
});
document.getElementById('dfSave')?.addEventListener('click', () => {
  const v = document.getElementById('dfInput').value.trim();
  if (v && workoutData.plans[dfDayKey]) {
    workoutData.plans[dfDayKey].focus = v;
    saveWorkout();
    renderWorkout();
  }
  closeDfModal();
});

// ── Render Main Workout View ──────────────────────────────────────────────────
function renderWorkout() {
  const root = document.getElementById('view-workout');
  if (!root) return;

  const todayKey = getTodayDayKey();
  const plan = workoutData.plans[selectedWorkoutDay] || { focus: 'Workout', exercises: [] };
  const exercises = plan.exercises || [];
  const totalEx = exercises.length;
  const completedEx = exercises.filter(x => isExerciseDone(x.id)).length;
  const pct = totalEx ? Math.round((completedEx / totalEx) * 100) : 0;
  const totalSets = exercises.reduce((sum, x) => sum + (x.sets || 3), 0);
  const estMins = Math.round(exercises.reduce((sum, x) => sum + ((x.sets || 3) * ((x.duration || 40) + (x.rest ?? 20))), 0) / 60);

  // Make sure the timer shows an exercise from the selected day (first one by default)
  syncTimerToDay();

  // 1. Weekly Day Selector Strip
  const dayStripHTML = `
    <div class="workout-day-strip">
      ${WEEK_DAYS.map(d => {
    const isSel = d.key === selectedWorkoutDay;
    const isTod = d.key === todayKey;
    const p = workoutData.plans[d.key];
    const doneCount = (p && p.exercises) ? p.exercises.filter(x => isExerciseDone(x.id)).length : 0;
    const allDone = p && p.exercises && p.exercises.length && doneCount === p.exercises.length;
    return `<button type="button" class="w-day-btn${isSel ? ' sel' : ''}${isTod ? ' is-today' : ''}" data-wday="${d.key}">
          <span class="w-day-name">${d.short}</span>
          <span class="w-day-sub">${p?.exercises?.length || 0} ex</span>
          ${allDone ? '<span class="w-day-dot"></span>' : ''}
        </button>`;
  }).join('')}
    </div>
  `;

  // 2. Day Focus & Progress Banner
  const bannerHTML = `
    <div class="workout-banner">
      <div class="wb-left">
        <div class="wb-focus-row">
          <div class="wb-focus-title">${esc(plan.focus || 'Workout Plan')}</div>
          <button type="button" class="wb-edit-btn" data-act="edit-focus" title="Rename Focus">${ic('edit')}</button>
        </div>
        <div class="wb-stats">
          <span>${totalEx} exercises</span> · 
          <span>${totalSets} sets</span> · 
          <span>~${estMins} mins</span>
        </div>
        <div class="wb-bar-wrap">
          <div class="wb-bar" style="width:${pct}%;background:${pct === 100 ? 'var(--success)' : 'var(--primary)'}"></div>
        </div>
      </div>
      <div class="wb-pct" style="color:${pct === 100 ? 'var(--success)' : 'var(--primary)'}">
        ${pct}%
      </div>
    </div>
  `;

  // 3. Timer & Stopwatch Card
  let timerCardInner = '';
  if (workoutTimer.mode === 'timer') {
    const isRest = workoutTimer.status === 'rest';
    const displaySec = isRest ? workoutTimer.restLeft : workoutTimer.timeLeft;
    const dots = Array.from({ length: workoutTimer.totalSets }, (_, i) =>
      `<span style="color:${i + 1 <= workoutTimer.currentSet ? 'var(--primary)' : 'var(--sub)'}">${i + 1 === workoutTimer.currentSet ? '●' : '○'}</span>`
    ).join(' ');

    // Ensure alternating exercises are valid if alternating is on
    if (workoutTimer.isAlternating) {
      if (!workoutTimer.altExA || !exercises.some(x => x.id === workoutTimer.altExA)) {
        workoutTimer.altExA = exercises[0] ? exercises[0].id : '';
      }
      if (!workoutTimer.altExB || !exercises.some(x => x.id === workoutTimer.altExB)) {
        const other = exercises.find(x => x.id !== workoutTimer.altExA);
        workoutTimer.altExB = other ? other.id : (exercises[1] ? exercises[1].id : workoutTimer.altExA);
      }
    }

    const curAltEx = workoutTimer.altActive === 'A'
      ? (exercises.find(x => x.id === workoutTimer.altExA) || exercises[0])
      : (exercises.find(x => x.id === workoutTimer.altExB) || exercises[0]);
    const nextAltEx = workoutTimer.altActive === 'A'
      ? (exercises.find(x => x.id === workoutTimer.altExB) || exercises[0])
      : (exercises.find(x => x.id === workoutTimer.altExA) || exercises[0]);
    const curTag = workoutTimer.altActive === 'A' ? 'tag-a' : 'tag-b';
    const curSlot = workoutTimer.altActive === 'A' ? 'Ex 1' : 'Ex 2';
    const nextSlot = workoutTimer.altActive === 'A' ? 'Ex 2' : 'Ex 1';

    const subSegHTML = `
      <div class="wt-sub-seg">
        <button type="button" class="wt-sub-btn ${!workoutTimer.isAlternating ? 'sel' : ''}" data-wtalt="single">
          ${ic('fitness_center')} Single Exercise
        </button>
        <button type="button" class="wt-sub-btn ${workoutTimer.isAlternating ? 'sel' : ''}" data-wtalt="alternate">
          ${ic('sync_alt')} Alternate 2
        </button>
      </div>
    `;

    const altPickerHTML = workoutTimer.isAlternating ? `
      <div class="wt-alt-picker-box">
        <div class="wt-alt-row">
          <span class="wt-alt-label"><span class="wt-pill-tag tag-a">Ex 1</span> First Exercise</span>
          <select class="wt-select" id="wtSelectA">
            ${exercises.map(x => `<option value="${x.id}" ${x.id === workoutTimer.altExA ? 'selected' : ''}>${esc(x.name)} (${x.sets} sets × ${x.duration}s)</option>`).join('')}
          </select>
        </div>
        <div class="wt-alt-swap-row">
          <button type="button" class="wt-swap-btn" data-wtact="swap-alt">${ic('swap_vert')} Swap Order</button>
        </div>
        <div class="wt-alt-row">
          <span class="wt-alt-label"><span class="wt-pill-tag tag-b">Ex 2</span> Second Exercise</span>
          <select class="wt-select" id="wtSelectB">
            ${exercises.map(x => `<option value="${x.id}" ${x.id === workoutTimer.altExB ? 'selected' : ''}>${esc(x.name)} (${x.sets} sets × ${x.duration}s)</option>`).join('')}
          </select>
        </div>
      </div>
    ` : '';

    const altBannerHTML = workoutTimer.isAlternating ? `
      <div class="wt-alt-banner" id="wtAltBanner">
        <div class="wt-alt-active-tag ${curTag}">
          <span class="wt-pill-tag ${curTag}">${curSlot}</span>
          ${esc(curAltEx?.name || 'Exercise')}
        </div>
        <div class="wt-alt-next-tag">Next up: ${esc(nextAltEx?.name || 'Next')} (${nextSlot})</div>
      </div>
    ` : '';

    const setsRowHTML = `
      <div class="wt-sets-row">
        <span class="wt-sets-lbl">Sets:</span>
        <div class="ex-stepper wt-stepper">
          <button type="button" class="ex-step-btn" data-wtact="step-timer-sets" data-delta="-1" title="Decrease sets">−</button>
          <span class="ex-step-val" id="wtSetsDisplay">${workoutTimer.totalSets}</span>
          <button type="button" class="ex-step-btn" data-wtact="step-timer-sets" data-delta="1" title="Increase sets">+</button>
        </div>
        <div class="wt-quick-sets">
          <button type="button" class="wt-qset-btn${workoutTimer.totalSets === 2 ? ' sel' : ''}" data-wtqsets="2">2</button>
          <button type="button" class="wt-qset-btn${workoutTimer.totalSets === 3 ? ' sel' : ''}" data-wtqsets="3">3</button>
          <button type="button" class="wt-qset-btn${workoutTimer.totalSets === 4 ? ' sel' : ''}" data-wtqsets="4">4</button>
          <button type="button" class="wt-qset-btn${workoutTimer.totalSets === 5 ? ' sel' : ''}" data-wtqsets="5">5</button>
        </div>
      </div>
    `;

    timerCardInner = `
      ${subSegHTML}
      ${altPickerHTML}
      ${altBannerHTML}
      <div class="wt-ex-info">
        <div class="wt-ex-name" id="wtExName">${esc(workoutTimer.isAlternating ? `${curSlot}: ${curAltEx?.name || 'Exercise'}` : (workoutTimer.exerciseName || 'Daily Exercise'))}</div>
        <div class="wt-ex-set" id="wtExSet">${workoutTimer.isAlternating ? `Round ${workoutTimer.currentSet} of ${workoutTimer.totalSets} &nbsp; ${dots} <span style="font-size:.74rem;opacity:.85;font-weight:700">(${curSlot})</span>` : `Set ${workoutTimer.currentSet} of ${workoutTimer.totalSets} &nbsp; ${dots}`}</div>
      </div>
      ${setsRowHTML}
      <div class="wt-display-wrap">
        <div class="wt-status-chip ${isRest ? 'rest' : workoutTimer.status === 'running' ? 'work' : 'ready'}" id="wtStatusChip">
          ${isRest ? 'REST TIME' : workoutTimer.status === 'running' ? 'WORK' : workoutTimer.status === 'paused' ? 'PAUSED' : 'READY'}
        </div><br>
        <div class="wt-digits${workoutTimer.status === 'running' && workoutTimer.timeLeft <= 5 && !isRest ? ' pulse-warn' : ''}" id="wtDigits">
          ${minToSecStr(displaySec)}
        </div>
      </div>
      <div class="wt-presets">
        <button type="button" class="wt-preset-chip${workoutTimer.targetDuration === 20 ? ' sel' : ''}" data-wtdur="20">20s</button>
        <button type="button" class="wt-preset-chip${workoutTimer.targetDuration === 30 ? ' sel' : ''}" data-wtdur="30">30s</button>
        <button type="button" class="wt-preset-chip${workoutTimer.targetDuration === 40 ? ' sel' : ''}" data-wtdur="40">40s</button>
        <button type="button" class="wt-preset-chip${workoutTimer.targetDuration === 45 ? ' sel' : ''}" data-wtdur="45">45s</button>
        <button type="button" class="wt-preset-chip${workoutTimer.targetDuration === 60 ? ' sel' : ''}" data-wtdur="60">60s</button>
        <button type="button" class="wt-preset-chip" data-wtadj="-5">-5s</button>
        <button type="button" class="wt-preset-chip" data-wtadj="+5">+5s</button>
      </div>
      <div class="wt-actions">
        <button type="button" class="wt-btn-circle" data-wtact="reset" title="Reset">${ic('replay')}</button>
        <button type="button" class="wt-btn-main ${workoutTimer.status === 'running' || workoutTimer.status === 'rest' ? 'running' : ''}" id="wtBtnMain" data-wtact="play-pause">
          ${workoutTimer.status === 'running' || workoutTimer.status === 'rest' ? `${ic('pause')} Pause` : `${ic('play_arrow')} Start`}
        </button>
        <button type="button" class="wt-btn-circle" data-wtact="next-set" title="Next Set">${ic('skip_next')}</button>
        <button type="button" class="wt-btn-circle ${workoutTimer.sound ? 'active-sound' : ''}" data-wtact="sound" title="Toggle Sound">
          ${ic(workoutTimer.sound ? 'volume_up' : 'volume_off')}
        </button>
      </div>
    `;
  } else {
    // Stopwatch Mode
    const lapsHTML = workoutTimer.swLaps.length ? `
      <div class="wt-laps-wrap">
        ${workoutTimer.swLaps.map((lap, idx) => `
          <div class="wt-lap-row">
            <span>Lap ${workoutTimer.swLaps.length - idx}</span>
            <b>${formatStopwatch(lap)}</b>
          </div>
        `).join('')}
      </div>
    ` : '';

    timerCardInner = `
      <div class="wt-ex-info">
        <div class="wt-ex-name">Stopwatch</div>
        <div class="wt-ex-set">Track workout duration</div>
      </div>
      <div class="wt-display-wrap">
        <div class="wt-status-chip ${workoutTimer.swRunning ? 'work' : 'ready'}" id="wtStatusChip">
          ${workoutTimer.swRunning ? 'RUNNING' : 'STOPPED'}
        </div><br>
        <div class="wt-digits" id="wtDigits">${formatStopwatch(workoutTimer.swElapsed)}</div>
      </div>
      <div class="wt-actions">
        <button type="button" class="wt-btn-circle" data-wtact="sw-reset" title="Reset">${ic('replay')}</button>
        <button type="button" class="wt-btn-main ${workoutTimer.swRunning ? 'running' : ''}" id="wtBtnMain" data-wtact="sw-play-pause">
          ${workoutTimer.swRunning ? `${ic('pause')} Pause` : `${ic('play_arrow')} Start`}
        </button>
        <button type="button" class="wt-btn-circle" data-wtact="sw-lap" title="Lap">${ic('timer')}</button>
      </div>
      ${lapsHTML}
    `;
  }

  const timerCardHTML = `
    <div class="workout-timer-card" id="workoutTimerCard">
      <div class="wt-mode-seg">
        <button type="button" class="wt-mode-btn ${workoutTimer.mode === 'timer' ? 'sel' : ''}" data-wtmode="timer">
          ${ic('timer')} Exercise Timer
        </button>
        <button type="button" class="wt-mode-btn ${workoutTimer.mode === 'stopwatch' ? 'sel' : ''}" data-wtmode="stopwatch">
          ${ic('hourglass_top')} Stopwatch
        </button>
      </div>
      ${timerCardInner}
    </div>
  `;

  // 4. Exercise List
  const doneEx = exercises.filter(x => isExerciseDone(x.id)).length;
  const exercisesHTML = exercises.map(ex => {
    const cat = EX_CATEGORIES[ex.category] || EX_CATEGORIES.chest;
    const isDone = isExerciseDone(ex.id);
    const completedSets = getCompletedSets(ex.id);

    const setBubbles = Array.from({ length: ex.sets }, (_, i) => {
      const setNum = i + 1;
      const setDone = completedSets.includes(setNum);
      return `<button type="button" class="ex-set-bubble${setDone ? ' done' : ''}" data-act="toggle-set" data-id="${ex.id}" data-set="${setNum}" title="Set ${setNum}">${setNum}</button>`;
    }).join('');

    return `
      <div class="ex-card${isDone ? ' done' : ''}" data-id="${ex.id}">
        <div class="ex-card-top">
          <div class="ex-icon-box" style="background:${hexA(cat.c, .18)};color:${cat.c}">
            ${ic(cat.e)}
          </div>
          <div class="ex-mid">
            <div class="ex-name-text">${esc(ex.name)}</div>
            <div class="ex-sub-meta">
              ${ex.sets} sets × ${ex.duration}s · ${ex.rest || 20}s rest${ex.reps ? ` · ${esc(ex.reps)}` : ''}
            </div>
          </div>
          <div class="habit-menu-btn ex-menu-btn" data-act="ex-menu" data-id="${ex.id}" role="button" aria-label="More">${ic('more_horiz')}</div>
        </div>
        <div class="ex-sets-tracker">
          <div class="ex-bubbles-row">
            ${setBubbles}
          </div>
          <div class="ex-right-actions">
            <button type="button" class="ex-timer-launch" data-act="load-timer" data-id="${ex.id}" title="Load in Timer" aria-label="Load in Timer">${ic('play_arrow')}</button>
            <div class="habit-check-btn ex-chk${isDone ? ' checked' : ''}" data-act="toggle-ex" data-id="${ex.id}" role="button" aria-label="Mark exercise complete">${CHECK_SVG}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  root.innerHTML = `
    <div class="workout-wrap">
      ${dayStripHTML}
      ${bannerHTML}
      ${timerCardHTML}
      <button type="button" class="ex-collapse-head" data-act="toggle-exlist" aria-expanded="${exListOpen}">
        <span class="ex-sec-title">Today's Routine</span>
        <span class="ex-count-chip">${doneEx}/${totalEx} done</span>
        <span class="ex-chev">${ic('expand_more', '20px')}</span>
      </button>
      ${exListOpen ? `
        <div class="ex-actions-row">
          <button type="button" class="ex-pill-btn" data-act="add-ex">${ic('add')} Add Exercise</button>
        </div>
        <div class="ex-list">
          ${exercisesHTML || `<div class="empty"><div class="empty-icon">${ic('fitness_center')}</div><p>No exercises planned for this day yet.<br>Tap “Add Exercise” to get started.</p></div>`}
        </div>
      ` : ''}
    </div>
  `;
}

// ── Event Handlers for Workout View (Event Delegation) ─────────────────────────
document.getElementById('view-workout')?.addEventListener('click', e => {
  // Day Selector
  const dayBtn = e.target.closest('[data-wday]');
  if (dayBtn) {
    buzz(HAPTIC.tick);
    selectedWorkoutDay = dayBtn.dataset.wday;
    syncTimerToDay(true);
    renderWorkout();
    return;
  }

  // Timer Mode Switcher
  const modeBtn = e.target.closest('[data-wtmode]');
  if (modeBtn) {
    buzz(HAPTIC.tick);
    workoutTimer.mode = modeBtn.dataset.wtmode;
    renderWorkout();
    return;
  }

  // Alternating Mode Switcher
  const altBtn = e.target.closest('[data-wtalt]');
  if (altBtn) {
    buzz(HAPTIC.tick);
    const isAlt = altBtn.dataset.wtalt === 'alternate';
    if (isAlt) {
      setupAlternatingMode(workoutTimer.altExA || workoutTimer.exerciseId, workoutTimer.altExB);
    } else {
      workoutTimer.isAlternating = false;
    }
    renderWorkout();
    return;
  }

  // Quick Sets Chips (Timer)
  const qsetBtn = e.target.closest('[data-wtqsets]');
  if (qsetBtn) {
    const s = parseInt(qsetBtn.dataset.wtqsets, 10);
    setTimerTotalSets(s);
    return;
  }

  // Duration Presets & Adjustments
  const durBtn = e.target.closest('[data-wtdur]');
  if (durBtn) {
    buzz(HAPTIC.tick);
    const d = parseInt(durBtn.dataset.wtdur, 10);
    workoutTimer.targetDuration = d;
    if (workoutTimer.status === 'idle' || workoutTimer.status === 'paused') {
      workoutTimer.timeLeft = d;
    }
    renderWorkout();
    return;
  }
  const adjBtn = e.target.closest('[data-wtadj]');
  if (adjBtn) {
    buzz(HAPTIC.tick);
    const delta = adjBtn.dataset.wtadj === '+5' ? 5 : -5;
    workoutTimer.targetDuration = Math.max(5, Math.min(600, workoutTimer.targetDuration + delta));
    if (workoutTimer.status === 'idle' || workoutTimer.status === 'paused') {
      workoutTimer.timeLeft = workoutTimer.targetDuration;
    }
    updateTimerDisplayOnly();
    return;
  }

  // Timer Actions
  const wtAct = e.target.closest('[data-wtact]')?.dataset.wtact;
  if (wtAct) {
    switch (wtAct) {
      case 'play-pause':
        if (workoutTimer.status === 'running' || workoutTimer.status === 'rest') {
          pauseWorkoutTimer();
        } else {
          startWorkoutTimer();
        }
        break;
      case 'reset':
        resetWorkoutTimer();
        break;
      case 'next-set':
        skipOrNextSet();
        break;
      case 'swap-alt': {
        const tmp = workoutTimer.altExA;
        workoutTimer.altExA = workoutTimer.altExB;
        workoutTimer.altExB = tmp;
        const plan = workoutData.plans[selectedWorkoutDay];
        const curId = workoutTimer.altActive === 'A' ? workoutTimer.altExA : workoutTimer.altExB;
        const curEx = plan?.exercises?.find(x => x.id === curId);
        if (curEx) {
          workoutTimer.exerciseId = curEx.id;
          workoutTimer.exerciseName = curEx.name;
          workoutTimer.targetDuration = curEx.duration || 40;
          if (workoutTimer.status === 'idle') workoutTimer.timeLeft = curEx.duration || 40;
        }
        buzz(HAPTIC.tick);
        renderWorkout();
        break;
      }
      case 'step-timer-sets': {
        const delta = parseInt(e.target.closest('[data-delta]')?.dataset.delta || '1', 10);
        adjustTimerSets(delta);
        break;
      }
      case 'sound':
        workoutTimer.sound = !workoutTimer.sound;
        buzz(HAPTIC.tick);
        showToast(workoutTimer.sound ? 'Sound & beeps enabled' : 'Sound muted');
        renderWorkout();
        break;
      case 'sw-play-pause':
        if (workoutTimer.swRunning) {
          pauseStopwatch();
        } else {
          startStopwatch();
        }
        break;
      case 'sw-reset':
        resetStopwatch();
        break;
      case 'sw-lap':
        lapStopwatch();
        break;
    }
    return;
  }

  // General Actions
  const actBtn = e.target.closest('[data-act]');
  if (!actBtn) return;
  const act = actBtn.dataset.act;
  const id = actBtn.dataset.id || actBtn.closest('.ex-card')?.dataset.id;

  switch (act) {
    case 'toggle-exlist':
      exListOpen = !exListOpen;
      try { localStorage.setItem('ht_ex_list_open', exListOpen ? '1' : '0'); } catch (e) { }
      buzz(HAPTIC.tick);
      renderWorkout();
      break;
    case 'edit-focus':
      openDfModal(selectedWorkoutDay);
      break;
    case 'add-ex':
      openExModal(selectedWorkoutDay, null);
      break;
    case 'load-timer': {
      const plan = workoutData.plans[selectedWorkoutDay];
      const ex = plan?.exercises?.find(x => x.id === id);
      if (ex) loadExerciseIntoTimer(ex, true);
      break;
    }
    case 'toggle-ex':
      toggleExerciseCompletion(selectedWorkoutDay, id);
      break;
    case 'toggle-set': {
      const setNum = parseInt(actBtn.dataset.set, 10);
      toggleExerciseSet(selectedWorkoutDay, id, setNum);
      break;
    }
    case 'ex-menu': {
      e.stopPropagation();
      const plan = workoutData.plans[selectedWorkoutDay];
      const ex = plan?.exercises?.find(x => x.id === id);
      popMenu(actBtn, [
        { label: `${ic('play_arrow')}Start in Timer`, fn: () => { if (ex) loadExerciseIntoTimer(ex, true); } },
        { label: `${ic('edit')}Edit Exercise`, fn: () => openExModal(selectedWorkoutDay, id) },
        {
          label: `${ic('delete')}Delete`, danger: true, fn: () => askConfirm({
            title: 'Delete Exercise?',
            text: `“${ex?.name || 'This exercise'}” will be removed from your ${WEEK_DAYS.find(d => d.key === selectedWorkoutDay)?.name || ''} plan.`,
            onYes: () => {
              if (plan) {
                plan.exercises = plan.exercises.filter(x => x.id !== id);
                saveWorkout(); renderWorkout();
              }
            }
          })
        }
      ]);
      break;
    }
  }
});

// Dropdown change events for Alternating Selects
document.getElementById('view-workout')?.addEventListener('change', e => {
  if (e.target.id === 'wtSelectA') {
    workoutTimer.altExA = e.target.value;
    if (workoutTimer.altActive === 'A') {
      const plan = workoutData.plans[selectedWorkoutDay];
      const ex = plan?.exercises?.find(x => x.id === workoutTimer.altExA);
      if (ex) {
        workoutTimer.exerciseId = ex.id;
        workoutTimer.exerciseName = ex.name;
        workoutTimer.targetDuration = ex.duration || 40;
        if (workoutTimer.status === 'idle') workoutTimer.timeLeft = ex.duration || 40;
      }
    }
    renderWorkout();
  } else if (e.target.id === 'wtSelectB') {
    workoutTimer.altExB = e.target.value;
    if (workoutTimer.altActive === 'B') {
      const plan = workoutData.plans[selectedWorkoutDay];
      const ex = plan?.exercises?.find(x => x.id === workoutTimer.altExB);
      if (ex) {
        workoutTimer.exerciseId = ex.id;
        workoutTimer.exerciseName = ex.name;
        workoutTimer.targetDuration = ex.duration || 40;
        if (workoutTimer.status === 'idle') workoutTimer.timeLeft = ex.duration || 40;
      }
    }
    renderWorkout();
  }
});


// ══ TABS ══════════════════════════════════════════════════════════════════════
const TAB_TITLES = { habits: 'Habit Tracker', routine: 'Daily Routine', attendance: 'Attendance', workout: 'Exercise Planner', games: 'Games' };
let curTab = 'habits';
function renderTab(n) {
  if (n === 'planner') n = 'workout';
  ({ habits: renderHabits, routine: renderRoutine, attendance: renderAttendance, workout: renderWorkout, games: renderGames })[n]();
}
const TAB_ORDER = ['habits', 'routine', 'attendance', 'workout', 'games'];
let tabTimer = null;
const reducedMotion = () => !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

// Slide + fade between tabs: the old view slides out toward the side you're leaving to,
// then the new one slides in from the side it lives on (direction follows the tab order).
function showTab(name, opts) {
  if (name === 'planner') name = 'workout';
  if (!TAB_TITLES[name]) name = 'habits';
  const prevEl = document.querySelector('.view.active');
  const prevName = prevEl ? prevEl.id.replace('view-', '') : null;
  clearTimeout(tabTimer);
  document.querySelectorAll('.view').forEach(v => v.classList.remove('leaving', 'entering'));

  curTab = name; closeMenu();
  document.querySelectorAll('.nav-item').forEach(b => {
    const on = b.dataset.tab === name; b.classList.toggle('active', on);
    if (on) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
  });
  document.getElementById('hTitle').textContent = TAB_TITLES[name];
  try { localStorage.setItem('ht3_tab', name); } catch (e) { }

  const nextEl = document.getElementById('view-' + name);

  if (!prevEl || prevName === name || reducedMotion() || (opts && opts.instant)) {
    renderTab(name);
    document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v === nextEl));
    if (window.scrollY) window.scrollTo({ top: 0 });
    return;
  }
  const dir = TAB_ORDER.indexOf(name) > TAB_ORDER.indexOf(prevName) ? 1 : -1;
  prevEl.style.setProperty('--dir', dir);
  prevEl.classList.add('leaving');
  // render AFTER the nav highlight has painted (the leave animation gives it time), so heavy tabs never delay the nav
  tabTimer = setTimeout(() => {
    renderTab(name);
    prevEl.classList.remove('leaving', 'active');
    nextEl.style.setProperty('--dir', dir);
    nextEl.classList.add('active', 'entering');
    if (window.scrollY) window.scrollTo({ top: 0 });
    // stagger: each block (and each card inside the lists) rises in a beat after the one before
    let i = 0;
    nextEl.querySelectorAll(':scope > *, .habits-wrap > *, .att-list > *, .timeline > *')
      .forEach(el => el.style.setProperty('--i', Math.min(i++, 9)));
    setTimeout(() => nextEl.classList.remove('entering'), 900);
  }, 130);
}
document.getElementById('bottomNav').addEventListener('click', e => {
  const b = e.target.closest('.nav-item'); if (!b) return;
  if (b.dataset.tab !== curTab) buzz(HAPTIC.tick);
  showTab(b.dataset.tab);
});

// ── Swipe left / right to move between tabs ──────────────────────────────────
(function () {
  let sx = 0, sy = 0, st = 0, tracking = false;
  const NO_SWIPE = 'input, textarea, select, [contenteditable], .dropdown, .drag-handle, .zip-overlay, .bottom-nav, .settings-panel, .modal-overlay, .confirm-overlay, .workout-timer-card';
  const scrollsX = el => {                          // don't hijack a horizontally scrollable area
    for (; el && el !== document.body; el = el.parentElement) {
      const ox = getComputedStyle(el).overflowX;
      if ((ox === 'auto' || ox === 'scroll') && el.scrollWidth > el.clientWidth + 1) return true;
    }
    return false;
  };
  const overlayOpen = () => document.querySelector('.modal-overlay.open, .confirm-overlay.open, .settings-panel.open, .zip-overlay.open');

  document.addEventListener('touchstart', e => {
    tracking = false;
    if (e.touches.length !== 1 || overlayOpen()) return;
    const t = e.touches[0];
    if (t.clientX < 24 || t.clientX > window.innerWidth - 24) return;     // leave the phone's edge-back gesture alone
    if (e.target.closest && (e.target.closest(NO_SWIPE) || scrollsX(e.target))) return;
    sx = t.clientX; sy = t.clientY; st = Date.now(); tracking = true;
  }, { passive: true });
  document.addEventListener('touchend', e => {
    if (!tracking) return; tracking = false;
    const t = e.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy;
    if (Date.now() - st < 650 && Math.abs(dx) >= 64 && Math.abs(dx) > Math.abs(dy) * 1.8) swipeTab(dx < 0 ? 1 : -1);
  }, { passive: true });
  document.addEventListener('touchcancel', () => { tracking = false; }, { passive: true });
})();
function swipeTab(step) {
  const i = TAB_ORDER.indexOf(curTab) + step;
  if (i < 0 || i >= TAB_ORDER.length) {                // first/last tab: a little rubber-band nudge instead
    const v = document.getElementById('view-' + curTab);
    if (v && v.animate && !reducedMotion()) v.animate([{ transform: 'none' }, { transform: `translateX(${step * -14}px)` }, { transform: 'none' }], { duration: 260, easing: 'cubic-bezier(.2,.8,.2,1)' });
    return;
  }
  buzz(HAPTIC.tick);
  showTab(TAB_ORDER[i]);
}

// weekend auto-open toggle (Settings)
const awT = document.getElementById('autoWkToggle');
awT.classList.toggle('on', prefs.autoWeekend);
awT.addEventListener('click', () => { prefs.autoWeekend = !prefs.autoWeekend; awT.classList.toggle('on', prefs.autoWeekend); savePrefs(); });

// haptic feedback toggle (Settings)
const hpT = document.getElementById('hapticToggle');
hpT.classList.toggle('on', prefs.haptics !== false);
hpT.addEventListener('click', () => { prefs.haptics = !(prefs.haptics !== false); hpT.classList.toggle('on', prefs.haptics); savePrefs(); if (prefs.haptics) buzz(HAPTIC.check); });

// midnight rollover + live "now" marker
function checkDay() {
  const n = new Date();
  if (fmt(n) === todayStr) return;
  today = n; todayStr = fmt(n);
  renderHeaderDate(); renderTab(curTab);
  showToast('New day — fresh start!', 'info');
}
setInterval(checkDay, 20000);
setInterval(() => { if (curTab === 'routine' && !document.getElementById('openDD') && !document.querySelector('.modal-overlay.open')) renderTab(curTab); }, 60000);
document.addEventListener('visibilitychange', () => { if (!document.hidden) checkDay(); });

// ── DATA SAFETY ────────────────────────────────────────────────────────────────

// EXPORT (v2 — habits + routine + weekend + workout + attendance + game)
document.getElementById('exportBtn').addEventListener('click', () => {
  const payload = {
    version: 2,
    exportedAt: new Date().toISOString(),
    habits,
    routine: RT.slots,
    weekend: WK.slots,
    workout: workoutData,
    attendance: att,
    game,
    zip: { ...zip, deviceId: undefined },
    prefs
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `habit-tracker-backup-${fmt(today)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast(`Backup saved — ${habits.length} habits, ${RT.slots.length + WK.slots.length} routine blocks, workout plans, ${att.subjects.length} subjects`);
  closeSettings();
});

// IMPORT (accepts v1 habit backups and v2 full backups)
document.getElementById('importBtn').addEventListener('click', () => {
  document.getElementById('importFile').click();
});

function mergeSlots(target, incoming) {
  let added = 0;
  incoming.forEach(s => {
    if (!s || !s.id || !s.title || !/^\d\d:\d\d$/.test(s.start || '') || !/^\d\d:\d\d$/.test(s.end || '')) return;
    const ex = target.find(x => x.id === s.id);
    if (ex) ex.log = { ...ex.log, ...s.log };
    else { target.push({ ...s, log: s.log || {} }); added++; }
  });
  return added;
}

document.getElementById('importFile').addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      const incoming = Array.isArray(data) ? data : data.habits;
      if (incoming !== undefined && !Array.isArray(incoming)) throw new Error('Invalid format');
      if (incoming === undefined && !data.routine && !data.weekend && !data.attendance && !data.game && !data.zip) throw new Error('Invalid format');

      let added = 0, updated = 0;
      (incoming || []).forEach(ih => {
        if (!ih.id || !ih.name) throw new Error('Malformed habit entry');
      });
      (incoming || []).forEach(ih => {
        const existing = habits.find(h => h.id === ih.id);
        if (existing) { existing.log = { ...existing.log, ...ih.log }; updated++; }
        else { habits.push(ih); added++; }
      });

      if (!Array.isArray(data)) {
        if (Array.isArray(data.routine)) added += mergeSlots(RT.slots, data.routine);
        if (Array.isArray(data.weekend)) added += mergeSlots(WK.slots, data.weekend);
        if (data.workout && typeof data.workout === 'object') {
          workoutData = cleanWorkoutData(data.workout);
          saveWorkout();
          added++;
        }

        const ia = data.attendance;
        if (ia && Array.isArray(ia.subjects)) {
          if (Number.isFinite(ia.threshold)) att.threshold = Math.min(95, Math.max(50, ia.threshold));
          ia.subjects.forEach(s => {
            if (!s || !s.id || !s.name || !Number.isInteger(s.a) || !Number.isInteger(s.t) || s.a > s.t) return;
            const ex = att.subjects.find(x => x.id === s.id);
            if (!ex) { att.subjects.push({ id: s.id, name: s.name, a: s.a, t: s.t, h: s.h || '', hd: Array.isArray(s.hd) ? s.hd : [], d: (s.d && typeof s.d === 'object') ? s.d : {} }); added++; }
            else if (s.t > ex.t) { ex.a = s.a; ex.t = s.t; ex.h = s.h || ''; ex.hd = Array.isArray(s.hd) ? s.hd : []; ex.d = (s.d && typeof s.d === 'object') ? s.d : ex.d; updated++; }
          });
        }
        const ig = data.game;
        if (ig && typeof ig === 'object') {
          game.points = Math.max(game.points, ig.points || 0);
          game.best = Math.max(game.best, ig.best || 0);
          game.days = { ...(ig.days || {}), ...game.days };
          if (ig.lastWon && (!game.lastWon || ig.lastWon > game.lastWon)) { game.lastWon = ig.lastWon; game.streak = ig.streak || 0; }
        }
        const iz = data.zip;
        if (iz && typeof iz === 'object' && iz.days && typeof iz.days === 'object') {
          Object.entries(iz.days).forEach(([d, r]) => {
            if (r && Number.isFinite(r.ms) && (!zip.days[d] || r.ms < zip.days[d].ms)) { zip.days[d] = { ms: r.ms, sent: !!r.sent }; added++; }
          });
          if (!zip.name && typeof iz.name === 'string' && /^[\p{L}\p{N} _.-]{2,16}$/u.test(iz.name)) zip.name = iz.name;
          if (iz.lastWon && (!zip.lastWon || iz.lastWon > zip.lastWon)) { zip.lastWon = iz.lastWon; zip.streak = iz.streak || 0; }
          zip.best = Math.max(zip.best, iz.best || 0);
          Z.day = null;
        }
      }

      save(); RT.persist(); WK.persist(); saveAtt(); saveGame(); saveZip();
      renderTab(curTab);
      closeSettings();
      showToast(`Import complete — ${added} added, ${updated} updated`);
    } catch (err) {
      showToast('Import failed: invalid backup file', 'error');
    }
    e.target.value = '';
  };
  reader.readAsText(file);
});

// CLEAR ALL DATA
document.getElementById('clearDataBtn').addEventListener('click', () => {
  closeSettings();
  askConfirm({
    title: 'Clear All Data?',
    text: 'This permanently deletes ALL habits, routines, attendance records, workout plans and game progress. Export a backup first.',
    yes: 'Clear Everything',
    onYes: () => {
      habits = []; RT.slots = []; WK.slots = [];
      workoutData = cleanWorkoutData(null);
      att = { threshold: 75, subjects: [] };
      game = { points: 0, best: 0, streak: 0, lastWon: null, days: {} };
      zip = zipFresh(zip.deviceId); Z.day = null;
      save(); RT.persist(); WK.persist(); saveWorkout(); saveAtt(); saveGame(); saveZip();
      renderTab(curTab);
      showToast('All data cleared');
    }
  });
});


// ── SERVICE WORKER REGISTRATION ──────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('./sw.js', { scope: './' });
      setInterval(() => reg.update(), 60_000);   // new versions download quietly and apply on the next open
      console.log('[PWA] Service worker registered ✓');
    } catch (err) {
      console.warn('[PWA] SW registration failed:', err);
    }
  });
}

// Offline / online indicator
window.addEventListener('offline', () => { document.getElementById('offlineBar').style.display = 'block'; });
window.addEventListener('online', () => { document.getElementById('offlineBar').style.display = 'none'; });

// ── BACK BUTTON CLOSES SHEETS / SETTINGS (instead of leaving the app) ───────────
// Every open layer owns one history entry. The phone's back button/gesture pops that entry,
// which closes the topmost layer. Closing a layer by hand (Cancel, tap outside) removes its entry.
(function () {
  const layers = [   // topmost first
    ['calOverlay', () => closeHabitCal()],
    ['zipOverlay', () => zipClose()],
    ['confirmOverlay', () => document.getElementById('confirmNo').click()],
    ['exerciseOverlay', () => closeExModal()],
    ['dayFocusOverlay', () => closeDfModal()],
    ['slotOverlay', () => closeSlot()],
    ['subjOverlay', () => closeSubj()],
    ['modalOverlay', () => closeModal()],
    ['settingsPanel', () => closeSettings()]
  ].map(([id, close]) => ({ el: document.getElementById(id), close }));

  // A reload can leave a stale layer entry behind — clear it so the first Back isn't "dead".
  if (history.state && history.state.htLayer) history.replaceState(null, '');

  let depth = 0;            // history entries we have pushed
  const skip = [];          // timers for popstate events we caused ourselves (history.go)
  const openCount = () => layers.filter(l => l.el.classList.contains('open')).length;

  function reconcile() {
    const want = openCount();
    while (depth < want) { history.pushState({ htLayer: true }, ''); depth++; }
    if (depth > want) {
      const n = depth - want; depth = want;
      skip.push(setTimeout(() => skip.shift(), 1500));   // safety: forget it if no popstate arrives
      history.go(-n);
    }
  }
  // MutationObserver callbacks run right after the tap, so the history entry is created
  // inside the user gesture (mobile Chrome ignores entries created outside one).
  const mo = new MutationObserver(reconcile);
  layers.forEach(l => mo.observe(l.el, { attributes: true, attributeFilter: ['class'] }));

  window.addEventListener('popstate', () => {
    if (skip.length) { clearTimeout(skip.shift()); return; }   // our own cleanup, not the user's Back
    const top = layers.find(l => l.el.classList.contains('open'));
    if (top && depth > 0) { depth--; top.close(); }
  });
})();

// One stat tile for the Games banners: tonal icon badge, big number (counts up if numeric), label.
const ghLast = {};   // last shown value per stat, so a re-render only animates real changes
function ghStat(icon, tone, val, label) {
  const num = typeof val === 'number', from = num ? (ghLast[label] ?? 0) : 0;
  if (num) ghLast[label] = val;
  return `<div class="gh-stat">${''}<b>${ic(icon)} <em${num ? ` data-count="${val}" data-from="${from}"` : ''}>${val}</em></b><span>${label}</span></div>`;
}

// ── MOTION HELPERS ────────────────────────────────────────────────────────────
// Animate every [data-count] inside root from data-from → data-count (final text is already in the DOM).
function countUps(root, ms = 750) {
  if (reducedMotion()) return;
  root.querySelectorAll('[data-count]').forEach(el => {
    const to = +el.dataset.count, from = +(el.dataset.from || 0);
    if (!isFinite(to) || from === to) return;
    const t0 = performance.now();
    const step = t => {
      const k = Math.min(1, (t - t0) / ms), e = 1 - Math.pow(1 - k, 4);
      const node = el.firstChild && el.firstChild.nodeType === 3 ? el.firstChild : null;
      const txt = String(Math.round(from + (to - from) * e)) + (el.dataset.suf || '');
      if (node) node.nodeValue = txt; else el.textContent = txt;
      if (k < 1 && el.isConnected) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}
// Little celebration: coloured specks fly out of (x, y). `big` = fuller burst.
function burst(x, y, color, big) {
  if (reducedMotion()) return;
  const n = big ? 26 : 12, wrap = document.createElement('div');
  wrap.className = 'burst'; wrap.style.cssText = `left:${x}px;top:${y}px`;
  const cols = [color, '#fbbf24', '#f472b6', '#60a5fa', '#34d399'];
  for (let i = 0; i < n; i++) {
    const p = document.createElement('i'), a = (i / n) * Math.PI * 2 + Math.random() * .5, d = (big ? 70 : 38) + Math.random() * (big ? 90 : 34);
    p.style.cssText = `--x:${Math.cos(a) * d}px;--y:${Math.sin(a) * d - (big ? 30 : 8)}px;--r:${Math.random() * 360}deg;background:${big ? cols[i % cols.length] : color};animation-delay:${Math.random() * 60}ms`;
    if (i % 3 === 0) p.className = 'sq';
    wrap.appendChild(p);
  }
  document.body.appendChild(wrap);
  setTimeout(() => wrap.remove(), 1100);
}

// ══════════════════════════════════════════════════════════════════════════════
//  HABIT CALENDAR — month view for a single habit (opened from the habit's ··· menu)
// ══════════════════════════════════════════════════════════════════════════════
const MON_L = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DOW_M = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];                       // Monday-first, like the tracker grid
const DOW_L = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const CAL = { mode: 'habit', id: null, y: 0, m: 0, picking: false, pickY: 0, opener: null, sel: null };

const calEl = () => document.getElementById('calOverlay');
const calSheet = () => document.getElementById('calSheet');
const calHabit = () => habits.find(h => h.id === CAL.id);
const ymKey = (y, m) => y * 12 + m;
const nowKey = () => ymKey(today.getFullYear(), today.getMonth());

// readable text colour on top of a habit colour (yellow/lime need dark text)
function inkOn(hex) {
  const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) > 165 ? '#1d1b20' : '#ffffff';
}

// All numbers for one month of one habit.
function calMonthData(h, y, m) {
  const dim = new Date(y, m + 1, 0).getDate();
  const lead = (new Date(y, m, 1).getDay() + 6) % 7;                // empty cells before the 1st (Mon = 0)
  const days = [];
  let done = 0, elapsed = 0, run = 0, longest = 0;
  const perDow = [0, 0, 0, 0, 0, 0, 0], possibleDow = [0, 0, 0, 0, 0, 0, 0];
  for (let d = 1; d <= dim; d++) {
    const ds = fmt(new Date(y, m, d));
    const future = ds > todayStr;
    const on = !!h.log?.[ds];
    const col = (lead + d - 1) % 7;
    if (!future) { elapsed++; possibleDow[col]++; }
    if (on) { done++; perDow[col]++; run++; longest = Math.max(longest, run); } else run = 0;
    days.push({ d, ds, future, on, col, today: ds === todayStr });
  }
  days.forEach((c, i) => {                                           // ribbon links between consecutive done days
    c.linkL = c.on && c.col > 0 && i > 0 && days[i - 1].on;
    c.linkR = c.on && c.col < 6 && i < dim - 1 && days[i + 1].on;
  });
  const rate = elapsed ? Math.round(done / elapsed * 100) : 0;
  let bestCol = -1, bestN = 0;
  perDow.forEach((n, i) => { if (n > bestN) { bestN = n; bestCol = i; } });
  return { dim, lead, days, done, elapsed, rate, longest, perDow, possibleDow, bestCol };
}

function calMonthRate(h, y, m) {                                      // quick rate for the previous-month comparison
  const dim = new Date(y, m + 1, 0).getDate();
  let done = 0, elapsed = 0;
  for (let d = 1; d <= dim; d++) {
    const ds = fmt(new Date(y, m, d));
    if (ds > todayStr) break;
    elapsed++; if (h.log?.[ds]) done++;
  }
  return elapsed ? Math.round(done / elapsed * 100) : null;
}

function openHabitCal(id, opener) {
  const h = habits.find(x => x.id === id); if (!h) return;
  CAL.mode = 'habit'; CAL.id = id; CAL.y = today.getFullYear(); CAL.m = today.getMonth(); CAL.picking = false; CAL.opener = opener || null;
  renderHabitCal();
  document.body.classList.add('cal-lock');
  calEl().classList.add('open');
  buzz(HAPTIC.tick);
  calSheet().focus({ preventScroll: true });
}

function closeHabitCal() {
  const el = calEl(); if (!el.classList.contains('open')) return;
  el.classList.remove('open');
  document.body.classList.remove('cal-lock');
  const sheet = calSheet(); sheet.style.transform = ''; sheet.style.transition = '';
  CAL.picking = false;
  try { CAL.opener?.isConnected && CAL.opener.focus?.({ preventScroll: true }); } catch (e) { }
}

function calGo(delta, dir) {
  const k = ymKey(CAL.y, CAL.m) + delta;
  if (k > nowKey()) { buzz(HAPTIC.warn); return; }                   // nothing to track in the future
  CAL.y = Math.floor(k / 12); CAL.m = k % 12;
  buzz(HAPTIC.tick);
  renderHabitCal(dir ?? (delta > 0 ? 'next' : 'prev'));
}

function renderHabitCal(anim, soft) {
  if (CAL.mode === 'att') return renderAttCal(anim, soft);   // soft = a day was just toggled: no cascade, ring/numbers glide from the old values
  const h = calHabit(); if (!h) return;
  const color = h.color || '#a07cc0';
  const D = calMonthData(h, CAL.y, CAL.m);
  const st = getStats(h);
  const atNow = ymKey(CAL.y, CAL.m) === nowKey();
  const prevRate = calMonthRate(h, CAL.m === 0 ? CAL.y - 1 : CAL.y, CAL.m === 0 ? 11 : CAL.m - 1);
  const pm = (CAL.m + 11) % 12;
  const key = ymKey(CAL.y, CAL.m), prev = (soft && CAL.last && CAL.last.key === key) ? CAL.last : null;
  CAL.last = { key, rate: D.rate, done: D.done, longest: D.longest, missed: D.elapsed - D.done };
  const sheet = calSheet();
  sheet.style.setProperty('--hc', color);
  sheet.style.setProperty('--hc-soft', hexA(color, .16));
  sheet.style.setProperty('--hc-glow', hexA(color, .45));
  sheet.style.setProperty('--hc-ink', inkOn(color));

  // progress ring
  const R = 30, C = 2 * Math.PI * R;
  const ring = `<svg class="cal-ring" viewBox="0 0 72 72" aria-hidden="true">
      <circle cx="36" cy="36" r="${R}" class="cal-ring-bg"/>
      <circle cx="36" cy="36" r="${R}" class="cal-ring-fg" stroke-dasharray="${C.toFixed(1)}" stroke-dashoffset="${(C * (1 - D.rate / 100)).toFixed(1)}" style="--from:${(prev ? C * (1 - prev.rate / 100) : C).toFixed(1)}" transform="rotate(-90 36 36)"/>
    </svg>`;

  // delta vs previous month
  let delta = '';
  if (prevRate !== null && D.elapsed) {
    const diff = D.rate - prevRate;
    delta = diff === 0
      ? `<span class="cal-delta flat">${ic('check')}Same as ${MON_S[pm]}</span>`
      : `<span class="cal-delta ${diff > 0 ? 'up' : 'down'}">${ic(diff > 0 ? 'trending_up' : 'trending_down')}${Math.abs(diff)}% vs ${MON_S[pm]}</span>`;
  }

  // grid
  let cells = '';
  for (let i = 0; i < D.lead; i++) cells += '<div class="cal-cell blank" aria-hidden="true"></div>';
  D.days.forEach(c => {
    const cls = ['cal-cell', c.on ? 'on' : '', c.linkL ? 'lk-l' : '', c.linkR ? 'lk-r' : '', c.today ? 'today' : '', c.future ? 'future' : ''].filter(Boolean).join(' ');
    const label = `${DOW_L[c.col]}, ${MON_L[CAL.m]} ${c.d}${c.today ? ' (today)' : ''}: ${c.on ? 'done' : c.future ? 'upcoming' : 'not done'}`;
    cells += `<button type="button" class="${cls}" style="--i:${c.d}" data-ds="${c.ds}" ${c.future ? 'aria-disabled="true"' : ''} aria-pressed="${c.on}" aria-label="${label}"><span class="cal-day">${c.d}</span></button>`;
  });

  // weekday bars
  const maxN = Math.max(1, ...D.perDow);
  const bars = D.perDow.map((n, i) => `
      <div class="cal-bar${i === D.bestCol ? ' best' : ''}" title="${DOW_L[i]}: ${n} done">
        <div class="cal-bar-track"><div class="cal-bar-fill" style="--d:${i * 45}ms;height:${n ? Math.max(10, Math.round(n / maxN * 100)) : 0}%"></div></div>
        <span>${DOW_M[i][0]}</span>
      </div>`).join('');
  const insight = D.done === 0
    ? (D.elapsed ? 'No check-ins this month yet.' : 'This month hasn’t started yet.')
    : D.rate === 100 && D.elapsed > 1 ? `Perfect so far — ${D.done} for ${D.done}!`
      : `You’re strongest on <b>${DOW_L[D.bestCol]}s</b>${D.perDow[D.bestCol] > 1 ? ` (${D.perDow[D.bestCol]}× this month)` : ''}.`;

  // month picker
  const picker = CAL.picking ? `
    <div class="cal-picker" role="group" aria-label="Choose month">
      <div class="cal-pick-head">
        <button type="button" class="cal-nav" data-act="py-" aria-label="Previous year">${ic('chevron_left')}</button>
        <b>${CAL.pickY}</b>
        <button type="button" class="cal-nav" data-act="py+" aria-label="Next year" ${CAL.pickY >= today.getFullYear() ? 'disabled' : ''}>${ic('chevron_right')}</button>
      </div>
      <div class="cal-pick-grid">
        ${MON_S.map((n, i) => {
    const k = ymKey(CAL.pickY, i), dis = k > nowKey(), sel = k === ymKey(CAL.y, CAL.m);
    return `<button type="button" class="cal-pm${sel ? ' sel' : ''}${k === nowKey() ? ' now' : ''}" data-act="pm" data-m="${i}" ${dis ? 'disabled' : ''}>${n}</button>`;
  }).join('')}
      </div>
    </div>` : '';

  sheet.innerHTML = `
    <div class="cal-grab" aria-hidden="true"><i></i></div>
    <div class="cal-top">
      <div class="cal-ico">${habitIconHTML(h.emoji || 'favorite')}</div>
      <div class="cal-ttl"><b>${esc(h.name)}</b><span>${ic('local_fire_department', null, 'fire')}${st.streak} day streak · Best ${st.best}</span></div>
      <button type="button" class="cal-close" data-act="close" aria-label="Close calendar">${ic('close')}</button>
    </div>
    <div class="cal-scroll">
      <div class="cal-nav-row">
        <button type="button" class="cal-nav" data-act="prev" aria-label="Previous month">${ic('chevron_left')}</button>
        <button type="button" class="cal-month" data-act="pick" aria-expanded="${CAL.picking}" aria-label="Pick month and year">
          <b>${MON_L[CAL.m]}</b> <span>${CAL.y}</span> <i>${ic('expand_more')}</i>
        </button>
        <button type="button" class="cal-nav" data-act="next" aria-label="Next month" ${atNow ? 'disabled' : ''}>${ic('chevron_right')}</button>
      </div>
      <div class="cal-stage">
        ${picker}
        <div class="cal-body ${anim ? 'slide-' + anim : ''}${soft ? '' : ' cascade'}">
          <div class="cal-dow">${DOW_M.map((d, i) => `<span class="${i > 4 ? 'we' : ''}">${d}</span>`).join('')}</div>
          <div class="cal-grid" id="calGrid">${cells}</div>
          <div class="cal-hint">Tap a day to mark or unmark it</div>
        </div>
      </div>
      <div class="cal-summary">
        <div class="cal-ring-wrap">${ring}<div class="cal-ring-txt"><b><em data-count="${D.rate}" data-from="${prev ? prev.rate : 0}">${D.rate}</em>%</b><span>done</span></div></div>
        <div class="cal-kpis">
          <div class="cal-kpi"><b><em data-count="${D.done}" data-from="${prev ? prev.done : 0}">${D.done}</em><small>/${D.elapsed}</small></b><span>Days done</span></div>
          <div class="cal-kpi"><b data-count="${D.longest}" data-from="${prev ? prev.longest : 0}">${D.longest}</b><span>Longest run</span></div>
          <div class="cal-kpi"><b data-count="${D.elapsed - D.done}" data-from="${prev ? prev.missed : 0}">${D.elapsed - D.done}</b><span>Missed</span></div>
        </div>
        ${delta ? `<div class="cal-delta-row">${delta}</div>` : ''}
      </div>
      <div class="cal-card">
        <div class="cal-card-h">By weekday</div>
        <div class="cal-bars${soft ? '' : ' grow'}">${bars}</div>
        <div class="cal-insight">${insight}</div>
      </div>
      <div class="cal-foot">
        ${atNow ? '' : '<button type="button" class="cal-today" data-act="today">Jump to today</button>'}
      </div>
    </div>`;
  countUps(sheet);
}

// ══════════════════════════════════════════════════════════════════════════════
//  ATTENDANCE CALENDAR — which days you attended / missed a subject (reuses the calendar sheet)
// ══════════════════════════════════════════════════════════════════════════════
const attSubj = () => att.subjects.find(s => s.id === CAL.id);
const attColor = s => COLORS[[...s.name].reduce((h, c) => h + c.charCodeAt(0), 0) % COLORS.length];

function openAttCal(id, opener) {
  const s = att.subjects.find(x => x.id === id); if (!s) return;
  CAL.mode = 'att'; CAL.id = id; CAL.y = today.getFullYear(); CAL.m = today.getMonth(); CAL.picking = false; CAL.opener = opener || null; CAL.sel = todayStr; CAL.last = null;
  renderHabitCal();
  document.body.classList.add('cal-lock');
  calEl().classList.add('open');
  buzz(HAPTIC.tick);
  calSheet().focus({ preventScroll: true });
}

function attMonthData(s, y, m) {
  const dim = new Date(y, m + 1, 0).getDate(), lead = (new Date(y, m, 1).getDay() + 6) % 7;
  const days = [], pDow = [0, 0, 0, 0, 0, 0, 0], aDow = [0, 0, 0, 0, 0, 0, 0];
  let P = 0, A = 0;
  for (let d = 1; d <= dim; d++) {
    const ds = fmt(new Date(y, m, d)), r = s.d[ds] || { p: 0, a: 0 }, col = (lead + d - 1) % 7;
    P += r.p; A += r.a; pDow[col] += r.p; aDow[col] += r.a;
    days.push({ d, ds, col, p: r.p, a: r.a, future: ds > todayStr, today: ds === todayStr });
  }
  let worst = -1, wn = 0; aDow.forEach((n, i) => { if (n > wn) { wn = n; worst = i; } });
  return { dim, lead, days, P, A, pDow, aDow, worst, wn };
}

function renderAttCal(anim, soft) {
  const s = attSubj(); if (!s) return;
  const T = att.threshold, color = attColor(s), ok = attOk(s.a, s.t, T);
  const D = attMonthData(s, CAL.y, CAL.m);
  const atNow = ymKey(CAL.y, CAL.m) === nowKey();
  const mPrefix = `${CAL.y}-${p(CAL.m + 1)}`;
  if (CAL.sel && CAL.sel.slice(0, 7) !== mPrefix) CAL.sel = null;     // the editor only shows for a day in the visible month
  const overall = s.t ? Math.round(s.a / s.t * 100) : 0;
  const monthPct = (D.P + D.A) ? Math.round(D.P / (D.P + D.A) * 100) : null;
  const key = `${CAL.id}:${ymKey(CAL.y, CAL.m)}`, prev = (soft && CAL.last && CAL.last.key === key) ? CAL.last : null;
  CAL.last = { key, overall, P: D.P, A: D.A };

  const sheet = calSheet();
  sheet.style.setProperty('--hc', color);
  sheet.style.setProperty('--hc-soft', hexA(color, .16));
  sheet.style.setProperty('--hc-glow', hexA(color, .45));
  sheet.style.setProperty('--hc-ink', inkOn(color));

  const R = 30, C = 2 * Math.PI * R;
  const ring = `<svg class="cal-ring" viewBox="0 0 72 72" aria-hidden="true"><circle cx="36" cy="36" r="${R}" class="cal-ring-bg"/><circle cx="36" cy="36" r="${R}" class="cal-ring-fg" stroke-dasharray="${C.toFixed(1)}" stroke-dashoffset="${(C * (1 - Math.min(100, overall) / 100)).toFixed(1)}" style="--from:${(prev ? C * (1 - Math.min(100, prev.overall) / 100) : C).toFixed(1)}" transform="rotate(-90 36 36)"/></svg>`;

  let cells = '';
  for (let i = 0; i < D.lead; i++) cells += '<div class="cal-cell blank" aria-hidden="true"></div>';
  D.days.forEach(c => {
    const st = c.p && c.a ? 'am' : c.p ? 'ap' : c.a ? 'aa' : '';
    const cls = ['cal-cell', st, c.today ? 'today' : '', c.future ? 'future' : '', c.ds === CAL.sel ? 'sel' : ''].filter(Boolean).join(' ');
    const label = `${DOW_L[c.col]}, ${MON_L[CAL.m]} ${c.d}: ${c.future ? 'upcoming' : (c.p || c.a) ? `${c.p} present, ${c.a} absent` : 'no class logged'}`;
    cells += `<button type="button" class="${cls}" style="--i:${c.d}" data-ds="${c.ds}" ${c.future ? 'aria-disabled="true"' : ''} aria-label="${label}"><span class="cal-day">${c.d}</span>${c.p + c.a > 1 ? `<i class="cal-n">${c.p + c.a}</i>` : ''}</button>`;
  });

  // editor for the selected day
  let editor = `<div class="att-day hint">${ic('info')}<span>Tap a day to log or edit classes for it</span></div>`;
  if (CAL.sel && CAL.sel <= todayStr) {
    const r = s.d[CAL.sel] || { p: 0, a: 0 }, dt = new Date(CAL.sel + 'T00:00:00');
    const row = (k, lbl, n, cls) => `<div class="att-step ${cls}"><span>${lbl}</span><div>
        <button type="button" data-act="day${k}-" data-k="${CAL.sel}" aria-label="Remove one ${lbl.toLowerCase()}" ${n ? '' : 'disabled'}>${ic('remove')}</button>
        <b>${n}</b>
        <button type="button" data-act="day${k}+" data-k="${CAL.sel}" aria-label="Add one ${lbl.toLowerCase()}">${ic('add')}</button></div></div>`;
    editor = `<div class="att-day"><div class="att-day-h">${DOW_L[(dt.getDay() + 6) % 7]}, ${dt.getDate()} ${MON_L[dt.getMonth()]}${CAL.sel === todayStr ? ' · Today' : ''}</div>${row('p', 'Present', r.p, 'ok')}${row('a', 'Absent', r.a, 'bad')}</div>`;
  }

  const maxN = Math.max(1, ...D.pDow);
  const bars = D.pDow.map((n, i) => `<div class="cal-bar${D.aDow[i] ? ' miss' : ''}" title="${DOW_L[i]}: ${n} present, ${D.aDow[i]} absent"><div class="cal-bar-track"><div class="cal-bar-fill" style="--d:${i * 45}ms;height:${n ? Math.max(10, Math.round(n / maxN * 100)) : 0}%"></div></div><span>${DOW_M[i][0]}</span></div>`).join('');
  const insight = (D.P + D.A) === 0 ? 'No classes logged this month.'
    : D.A === 0 ? `Perfect attendance this month — ${D.P} for ${D.P}!`
      : `You miss most on <b>${DOW_L[D.worst]}s</b> (${D.wn}× this month).`;
  const dated = Object.values(s.d).reduce((m, r) => m + r.p + r.a, 0), undated = s.t - dated;

  const picker = CAL.picking ? `
    <div class="cal-picker" role="group" aria-label="Choose month">
      <div class="cal-pick-head">
        <button type="button" class="cal-nav" data-act="py-" aria-label="Previous year">${ic('chevron_left')}</button>
        <b>${CAL.pickY}</b>
        <button type="button" class="cal-nav" data-act="py+" aria-label="Next year" ${CAL.pickY >= today.getFullYear() ? 'disabled' : ''}>${ic('chevron_right')}</button>
      </div>
      <div class="cal-pick-grid">${MON_S.map((n, i) => {
    const k = ymKey(CAL.pickY, i), dis = k > nowKey(), sel = k === ymKey(CAL.y, CAL.m);
    return `<button type="button" class="cal-pm${sel ? ' sel' : ''}${k === nowKey() ? ' now' : ''}" data-act="pm" data-m="${i}" ${dis ? 'disabled' : ''}>${n}</button>`;
  }).join('')}</div>
    </div>` : '';

  sheet.innerHTML = `
    <div class="cal-grab" aria-hidden="true"><i></i></div>
    <div class="cal-top">
      <div class="cal-ico att-letter">${esc(s.name.trim().charAt(0).toUpperCase())}</div>
      <div class="cal-ttl"><b>${esc(s.name)}</b><span>${s.a} / ${s.t} attended · safe level ${T}%</span></div>
      <button type="button" class="cal-close" data-act="close" aria-label="Close calendar">${ic('close')}</button>
    </div>
    <div class="cal-scroll">
      <div class="cal-nav-row">
        <button type="button" class="cal-nav" data-act="prev" aria-label="Previous month">${ic('chevron_left')}</button>
        <button type="button" class="cal-month" data-act="pick" aria-expanded="${CAL.picking}" aria-label="Pick month and year"><b>${MON_L[CAL.m]}</b> <span>${CAL.y}</span> <i>${ic('expand_more')}</i></button>
        <button type="button" class="cal-nav" data-act="next" aria-label="Next month" ${atNow ? 'disabled' : ''}>${ic('chevron_right')}</button>
      </div>
      <div class="cal-stage">
        ${picker}
        <div class="cal-body ${anim ? 'slide-' + anim : ''}${soft ? '' : ' cascade'}">
          <div class="cal-dow">${DOW_M.map((d, i) => `<span class="${i > 4 ? 'we' : ''}">${d}</span>`).join('')}</div>
          <div class="cal-grid" id="calGrid">${cells}</div>
          <div class="cal-legend"><span><i class="lg ap"></i>Attended</span><span><i class="lg aa"></i>Absent</span><span><i class="lg am"></i>Both</span></div>
        </div>
      </div>
      ${editor}
      <div class="cal-summary">
        <div class="cal-ring-wrap${ok || !s.t ? '' : ' bad'}">${ring}<div class="cal-ring-txt"><b>${s.t ? `<em data-count="${overall}" data-from="${prev ? prev.overall : 0}">${overall}</em>%` : '—'}</b><span>overall</span></div></div>
        <div class="cal-kpis">
          <div class="cal-kpi"><b data-count="${D.P}" data-from="${prev ? prev.P : 0}">${D.P}</b><span>Attended</span></div>
          <div class="cal-kpi"><b data-count="${D.A}" data-from="${prev ? prev.A : 0}">${D.A}</b><span>Absent</span></div>
          <div class="cal-kpi"><b>${monthPct === null ? '—' : monthPct + '%'}</b><span>This month</span></div>
        </div>
        <div class="cal-delta-row"><span class="cal-delta ${!s.t ? 'flat' : ok ? 'up' : 'down'}">${ic(!s.t ? 'info' : ok ? 'check' : 'warning')}${esc(attTip(s, T))}</span></div>
      </div>
      <div class="cal-card">
        <div class="cal-card-h">Attended by weekday</div>
        <div class="cal-bars${soft ? '' : ' grow'}">${bars}</div>
        <div class="cal-insight">${insight}</div>
      </div>
      ${undated > 0 ? `<div class="cal-note">${undated} earlier class${undated !== 1 ? 'es were' : ' was'} logged before dates were tracked, so ${undated !== 1 ? 'they don’t' : 'it doesn’t'} show on the calendar.</div>` : ''}
      <div class="cal-foot">${atNow ? '' : '<button type="button" class="cal-today" data-act="today">Jump to today</button>'}</div>
    </div>`;
  countUps(sheet);
}

// +/− for one day's Present / Absent count (keeps the subject's totals in step)
function attCalDay(act, ds) {
  const s = attSubj(); if (!s || !ds || ds > todayStr) return;
  const k = act.charAt(3) === 'p' ? 'p' : 'a', delta = act.endsWith('+') ? 1 : -1;
  const r = s.d[ds] || { p: 0, a: 0 };
  if (delta < 0 && r[k] <= 0) { buzz(HAPTIC.warn); return; }
  r[k] += delta; s.t += delta; if (k === 'p') s.a += delta;
  if (!r.p && !r.a) delete s.d[ds]; else s.d[ds] = r;
  s.h = ''; s.hd = [];                                        // quick-undo history no longer lines up
  saveAtt(); buzz(k === 'p' ? HAPTIC.check : HAPTIC.warn);
  const sc = calSheet().querySelector('.cal-scroll'), top = sc ? sc.scrollTop : 0;
  renderAttCal(undefined, true);
  const sc2 = calSheet().querySelector('.cal-scroll'); if (sc2) sc2.scrollTop = top;
  renderAttendance();
}

// ── interactions (one delegated listener) ─────────────────────────────────────
(function () {
  const ov = calEl(), sheet = calSheet();

  ov.addEventListener('click', e => {
    if (e.target === ov) { closeHabitCal(); return; }                 // tap the dim area
    const cell = e.target.closest('.cal-cell[data-ds]');
    if (cell) {
      if (cell.classList.contains('future')) { showToast('That day hasn’t happened yet', 'info'); buzz(HAPTIC.warn); return; }
      if (CAL.mode === 'att') { CAL.sel = cell.dataset.ds; buzz(HAPTIC.tick); renderAttCal(undefined, true); return; }
      const h = calHabit(); if (!h) return;
      const ds = cell.dataset.ds, wasOn = !!h.log?.[ds];
      toggleDay(h.id, ds, null, h.color || '#a07cc0');                // updates the card behind, banner, week strip, saves
      const scroller = sheet.querySelector('.cal-scroll'), top = scroller ? scroller.scrollTop : 0;
      renderHabitCal(undefined, true);
      if (scroller) sheet.querySelector('.cal-scroll').scrollTop = top;
      const again = sheet.querySelector(`.cal-cell[data-ds="${ds}"]`);
      if (again) { again.classList.add(wasOn ? 'unpop' : 'pop'); again.focus({ preventScroll: true }); }
      return;
    }
    const act = e.target.closest('[data-act]')?.dataset.act;
    if (!act) return;
    if (act.startsWith('day')) { attCalDay(act, e.target.closest('[data-act]').dataset.k); return; }
    if (act === 'close') closeHabitCal();
    else if (act === 'prev') calGo(-1);
    else if (act === 'next') calGo(1);
    else if (act === 'today') {
      const dir = ymKey(CAL.y, CAL.m) < nowKey() ? 'next' : 'prev';
      CAL.y = today.getFullYear(); CAL.m = today.getMonth(); CAL.picking = false; buzz(HAPTIC.tick); renderHabitCal(dir);
    }
    else if (act === 'pick') { CAL.picking = !CAL.picking; CAL.pickY = CAL.y; renderHabitCal(); }
    else if (act === 'py-') { CAL.pickY--; renderHabitCal(); }
    else if (act === 'py+') { if (CAL.pickY < today.getFullYear()) { CAL.pickY++; renderHabitCal(); } }
    else if (act === 'pm') {
      const m = +e.target.closest('[data-m]').dataset.m;
      if (ymKey(CAL.pickY, m) <= nowKey()) {
        const dir = ymKey(CAL.pickY, m) < ymKey(CAL.y, CAL.m) ? 'prev' : 'next';
        CAL.y = CAL.pickY; CAL.m = m; CAL.picking = false; buzz(HAPTIC.tick); renderHabitCal(dir);
      }
    }
  });

  // keyboard: Esc closes (or closes the picker first), ←/→ change month, T = today
  document.addEventListener('keydown', e => {
    if (!ov.classList.contains('open')) return;
    if (e.key === 'Escape') { e.stopPropagation(); CAL.picking ? (CAL.picking = false, renderHabitCal()) : closeHabitCal(); }
    else if (e.key === 'ArrowLeft' && !e.target.closest?.('.cal-cell')) calGo(-1);
    else if (e.key === 'ArrowRight' && !e.target.closest?.('.cal-cell')) calGo(1);
    else if (e.key === 't' || e.key === 'T') { sheet.querySelector('[data-act="today"]')?.click(); }
    else if (e.key === 'Tab') {                                       // keep focus inside the dialog
      const f = [...sheet.querySelectorAll('button:not([disabled])')];
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      else if (!sheet.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
    }
  });

  // swipe left/right on the calendar = change month
  let sx = 0, sy = 0, swiping = false;
  sheet.addEventListener('touchstart', e => {
    if (e.target.closest('.cal-grab, .cal-top')) return;
    sx = e.touches[0].clientX; sy = e.touches[0].clientY; swiping = !!e.target.closest('.cal-stage');
  }, { passive: true });
  sheet.addEventListener('touchend', e => {
    if (!swiping) return; swiping = false;
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 54 && Math.abs(dx) > Math.abs(dy) * 1.6) calGo(dx < 0 ? 1 : -1);
  }, { passive: true });

  // drag the top of the sheet down to dismiss (mobile)
  let dy0 = null, dragY = 0;
  sheet.addEventListener('touchstart', e => {
    if (!e.target.closest('.cal-grab, .cal-top') || e.target.closest('.cal-close')) return;
    dy0 = e.touches[0].clientY; dragY = 0; sheet.style.transition = 'none';
  }, { passive: true });
  sheet.addEventListener('touchmove', e => {
    if (dy0 === null) return;
    dragY = Math.max(0, e.touches[0].clientY - dy0);
    sheet.style.transform = `translateY(${dragY}px)`;
  }, { passive: true });
  sheet.addEventListener('touchend', () => {
    if (dy0 === null) return;
    dy0 = null; sheet.style.transition = '';
    if (dragY > 90) closeHabitCal(); else sheet.style.transform = '';
  });
})();

// ── INIT ──────────────────────────────────────────────────────────────────────
renderEmojiPicker();
renderColorPicker();

// Land on the Weekend Planner the first time the app opens on a Saturday/Sunday;
// otherwise restore the last tab the person used.
(function () {
  let start = localStorage.getItem('ht3_tab') || 'habits';
  if (start === 'planner') start = 'workout';
  if (prefs.autoWeekend && isWeekend(today)) {
    routineMode = 'weekend';
    if (localStorage.getItem('ht3_wkAuto') !== todayStr) {
      localStorage.setItem('ht3_wkAuto', todayStr);
    }
  }
  showTab(start, { instant: true });   // no slide animation on first paint
})();
