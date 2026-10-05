/**
 * =========================================================================
 * WEDDING MUSIC CONFIGURATION
 * =========================================================================
 * Set your fixed wedding song here!
 *
 * HOW TO SET YOUR OWN MP3:
 * -------------------------------------------------------------------------
 * OPTION 1: Direct Web Link (URL)
 *   Replace `src` below with any direct .mp3 link (e.g., from your hosting,
 *   Dropbox direct link, Google Drive direct stream, or audio CDN):
 *     src: 'https://example.com/our-wedding-song.mp3'
 *
 * OPTION 2: Local File in the /public folder
 *   1. Save your MP3 file into the "/public" directory (e.g., "/public/song.mp3")
 *   2. Set the `src` below to:
 *     src: '/song.mp3'
 * =========================================================================
 */

export interface FixedSongConfig {
  /** The display title of your wedding song */
  title: string;
  /** Artist or subtitle info (optional) */
  artist: string;
  /** Direct URL or local path to your MP3 file */
  src: string;
  /** Default volume between 0.0 (silent) and 1.0 (full volume) */
  defaultVolume: number;
}

export const FIXED_WEDDING_SONG: FixedSongConfig = {
  // 👇 Enter your song title here:
  title: "Canon in D Major",

  // 👇 Enter artist or subtitle info here:
  artist: "Pachelbel · Strings & Orchestra",

  // 👇 REPLACE THIS WITH YOUR MP3 LINK OR '/your-song.mp3':
  src: "/song.mp3",

  // Default volume (0.7 = 70%)
  defaultVolume: 0.7,
};
