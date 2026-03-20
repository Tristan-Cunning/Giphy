# Giphy Need To Know

## Best Practices for Renditions

1. For the vast majority of GIPHY integrations, we recommend using MP4 for gifs
   and WEBP for stickers, which provides high image quality for relatively small file
   sizes, and is supported on all major platforms and web browsers.
   For more information, see our Rendition Guide.
2. Every GIF returned by the Trending and Search endpoints contains an images object
   with Media URLs (url field). The images object returns multiple renditions.
3. We provide various renditions of each GIF in the images object to give your users
   the best experience possible. Generally, it’s best to use the smaller fixed_height
   or fixed_width renditions on your preview grid.
4. Once a user has selected a GIF, present a higher resolution rendition.
5. If you have bandwidth limitations consider using downsized_small(max 200kB),
   downsized (max 2MB), downsized_medium(max 5MB) renditions.
6. Refer to our Rendition Guide for more information on what rendition is best suited for each use-case.

## Prohibited Integration Practices

1. Do not strip or modify URLs returned by the API. In particular, do not remove
   or modify query params in our media URLs while rendering the media assets.
2. Do not cache API responses or media URLs or cache or store copies of GIPHY's
   media assets.This is vital for ensuring content safety.
3. Do not proxy requests to GIPHY, either API calls or media URL loads. All requests
   to GIPHY should be made directly from the client side (e.g. your app or web browser).
4. Do not reorder content or filter out our content returned from GIPHY's search of trending API
   responses.
5. Do not mix GIPHY's content with content from other providers in the same grid.
