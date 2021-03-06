/**
 * Original by Scott Helme.
 *
 * Reference: https://scotthelme.co.uk/hpkp-cheat-sheet/
 */

Prism.languages.hpkp = {
	'directive':  {
             pattern: /\b(?:(?:includeSubDomains|preload|strict)(?: |;)|(?:max-age|report-uri|pin-sha256)=|report-to )/,
             alias: 'keyword'
        },
	'safe': {
            pattern: /[0-9]{7,}/,
            alias: 'selector'
        },
	'unsafe': {
            pattern: /[0-9]{0,6}/,
            alias: 'function'
        }
};