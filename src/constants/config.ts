const Config  = {
  APP_NAME: process.env.EXPO_PUBLIC_APP_NAME,
  WIDTH_DESIGN: process.env.EXPO_PUBLIC_WIDTH_DESIGN,
  HEIGHT_DESIGN: process.env.EXPO_PUBLIC_HEIGHT_DESIGN,
  API_URL: process.env.EXPO_PUBLIC_API_URL,
  API_KEY: process.env.EXPO_PUBLIC_API_KEY,
  ENCRYPTION_KEY: process.env.EXPO_PUBLIC_ENCRYPTION_KEY
} as const;

export default Config;