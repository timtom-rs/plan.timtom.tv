[plan.timtom.tv](https://plan.timtom.tv/)


## Linux setup
```bash
sudo apt update
sudo apt install -y ruby-full build-essential zlib1g-dev
```

Install Bundler and gems:

```bash
gem install bundler
sudo bundle install
```

Run the site:

```bash
bundle exec jekyll serve --livereload
```

Open the dev server at http://127.0.0.1:4000/.