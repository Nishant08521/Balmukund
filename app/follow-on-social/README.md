# Social Media Feed Integration

This page integrates real social media feeds from Facebook, Instagram, and YouTube.

## Setup Instructions

### Environment Variables

Create a `.env.local` file in the root of your project and add the following variables:

```env
# Facebook Configuration
NEXT_PUBLIC_FACEBOOK_PAGE_URL=https://www.facebook.com/YourPageName
NEXT_PUBLIC_FACEBOOK_PAGE_NAME=YourPageName

# Instagram Configuration
NEXT_PUBLIC_INSTAGRAM_USERNAME=yourusername
# Instagram Post IDs (comma-separated, e.g., "ABC123,XYZ789,DEF456")
NEXT_PUBLIC_INSTAGRAM_POST_IDS=post_id_1,post_id_2,post_id_3

# YouTube Configuration
NEXT_PUBLIC_YOUTUBE_API_KEY=your_youtube_api_key
NEXT_PUBLIC_YOUTUBE_CHANNEL_ID=UC_your_channel_id
```

### Getting Your Credentials

#### Facebook
1. Go to your Facebook Page
2. Copy the page URL (e.g., `https://www.facebook.com/BalmukundSuperSteel`)
3. Use this URL for `NEXT_PUBLIC_FACEBOOK_PAGE_URL`

#### Instagram
1. Go to your Instagram profile
2. Copy your username (the part after `instagram.com/`)
3. Use this for `NEXT_PUBLIC_INSTAGRAM_USERNAME`

4. **Get Instagram Post IDs:**
   - Go to any Instagram post you want to display
   - The post ID is in the URL: `instagram.com/p/POST_ID/`
   - Copy the POST_ID part (the string of letters and numbers)
   - Add multiple post IDs separated by commas in `NEXT_PUBLIC_INSTAGRAM_POST_IDS`
   - Example: `NEXT_PUBLIC_INSTAGRAM_POST_IDS=ABC123xyz,XYZ789abc,DEF456ghi`

**Note:** For a full automated feed, you would need to use Instagram Basic Display API (requires app setup on Facebook Developers). The current implementation uses individual post embeds which is simpler to set up.

#### YouTube
1. **Get YouTube API Key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the YouTube Data API v3
   - Create credentials (API Key)
   - Copy the API key

2. **Get YouTube Channel ID:**
   - Go to your YouTube channel
   - The Channel ID is in the URL: `youtube.com/channel/UC_xxxxxxxxxxxxx`
   - Or go to YouTube Studio → Settings → Channel → Advanced settings
   - Copy the Channel ID

### Features

- **Facebook Feed:** Uses Facebook Page Plugin to display your page timeline
- **Instagram Feed:** Displays Instagram posts (requires post IDs or API setup)
- **YouTube Feed:** Fetches latest videos from your channel using YouTube Data API
- **Tab Navigation:** Switch between different social media platforms
- **Responsive Design:** Works on all device sizes

### Customization

You can customize the number of videos displayed by modifying the `maxResults` parameter in the YouTube API call (currently set to 6).

For Instagram, replace the placeholder post IDs with your actual Instagram post IDs in the code.

