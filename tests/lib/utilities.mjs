/*!
 * Copyright 2026 SignpostMarv
 * Available under MIT license
 */

/**
 * @param {string} value
 *
 * @return {string}
 */
export function strip_test_spacing(value) {
	return value.replace(/^\t+/gm, '');
}
