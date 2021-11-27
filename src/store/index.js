import { writable } from 'svelte/store';

export const editor_val = writable('');
export const submitting = writable(false);

export const lightMode = writable(true);