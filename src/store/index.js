const config = {"setup":{"title":"CompSci 101, Fall 2021 APTs","desc":"This is the webpage for grading and submitting your APTs.","theme":{"accent":"#012a4a","text":"black","text_inv":"white","back":"#d3dceb","section":"rgba(242,242,242,1)","section_f":"rgba(0,0,0,0.05)","correct":"rgba(0, 179, 0, 1)","wrong":"rgba(255, 17, 0, 1)","correct_l":"rgba(0, 179, 0, .2)","wrong_l":"rgba(255, 17, 0, .23)","progress":"rgb(255, 224, 75)"}}}

import { writable, readable} from 'svelte/store';

export const editor_val = writable('');
export const submitting = writable(false);

export const lightMode = writable(undefined);

export const mainTitle = readable(config.setup.title)

