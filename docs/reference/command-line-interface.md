
# Command line interface
The command line interface documents itself with a `--help` option:

[media]
  small: /img/cli-help.png
  large: /img/cli-help-big.png

``` sh
Usage
  nue [command] [options] [file_matches]
  nue -v or --version
  nue -h or --help

Commands
  serve    Start development server (default command)
  build    Build the site under <root_dir>
  stats    Show site statistics

Options
  -r or --root          Source directory. Default "." (current working dir)
  -p or --production    Build production version / Show production stats
  -e or --environment   Read extra options to override defaults in site.yaml

File matches
  Only build files that match the the rest of the arguments. For example:
  "nue build .ts .css" will build all TypeScript and CSS files

Examples
  # serve current directory
  nue

  # build everything
  nue build

  # build everything to production with extra config
  nue build --production --environment staging.yaml

  # build all Markdown and CSS files
  nue build .md .css

  # more examples
  open https://nuejs.org/docs/cli

Less is more

 ┏━┓┏┓┏┳━━┓
 ┃┏┓┫┃┃┃┃━┫
 ┃┃┃┃┗┛┃┃━┫  nuejs.org
 ┗┛┗┻━━┻━━┛
```


## Usage examples
Few more usage examples:

``` sh
# serve current directory
nue serve

# serve a specific directory
nue serve --root my-blog

# serve the production version (no hot-reloading)
nue serve --production

# build to production with custom settings
nue build -p --environment custom.yaml

# show production stats
nue -p stats

# show what will be built (without building)
nue build .js .ts .nue --dry-run
```

## Build example

Here's an example output of `nue build`:

[bunny-video]
  videoId: 45b73e3a-3edd-47af-bcd8-49039496b107
  width: 600
