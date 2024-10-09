This project uses Next.js with npm. To run the dev server:

`npm run dev` 

### SASS

This project uses SASS to build its css files. Run the following to re-compile `main.css` when `main.scss` is edited. Don't edit `main.css` directly. 

`sass --watch _sass/main.scss public/css/main.css`

### Deploying new Changes - Note to Self

This project is deployed on DigitalOcean with ngnix and PM2.

In `/var/www/alberse-portfolio`, git pull for new changes. Then `npm run build` and `pm2 restart johnalberse`.

One day I might automate this, but I update this site infrequently and it's not worth the effort.

### Acknowledgements

The markdown-via-CSS look is principally based on work by [Eliza](https://github.com/hawkw/hawkw.github.io/tree/e5517092936a4b5cb55768ab7099544fd10c4190), and thence [Peter Coles](https://mrcoles.com/demo/markdown-css/)

