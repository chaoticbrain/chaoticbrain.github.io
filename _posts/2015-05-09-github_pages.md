---
layout: post
title: Getting the ball rolling
---

## Why?
I am a software developer by profession, as the saying goes: Every good developer should have a blog. Right? So there's that.  But mainly this will be a holding ground for things I wish to re-remember or just find neat.  If others find it helpfull or amusing or whatever that's nice, but mainly it's for me. 

## Getting the ball rolling.
Seemingly, like everythign I try to do, what should have been a 5 minute task **setup github pages blog** turned into a mess. 

### Jekyll 2.5.3
Hmm, well we want a blog. Github has this handy feature of github pages.  A nice short guide here: https://help.github.com/articles/using-jekyll-with-pages/ has all of three commands to supposedly get a github compatable Jekyll sight up and running...

```
gem install bundler
echo source 'https://rubygems.org' > Gemfile
echo gem 'github-pages' >> Gemfile
bundle install
```

3 months later... (I never said I was in a hurry)
After forgetting where I was, and finally getting back to it. I found [Poole](https://github.com/poole/poole) and [joshualande's post](http://joshualande.com/jekyll-github-pages-poole/)

#### Step 1: 

```
gem install jekyll
jekyll 2.5.3 installed
```  

#### Step 2: 

Create blog structure from clone of Poole. Nothing special here.

####Step 3: serve.

```
$ jekyll serve .... 
github-pages jekyll 2.4 not found.   
```
Shit. Alright, lets google that: "jekyll 2.5.3 github pages doesn't work" which leads me to the answer [use 2.4.0](https://github.com/jekyll/jekyll/issues/3084)

```
gem uninstall jekyll

..jekyll 2.5.3 uninstalled
..jekyll 2.4 uninstalled.
gem uninstall bundle
gem install jekyll -v 2.4.0
..jekyll installed
gem install bundle

bundle exec jekyll serve
..Generating... 
                    done.
..Server address: http://0.0.0.0:4000//
  Server running... press ctrl-c to stop.
```

Yay! 
#### lesson learned: 

Currently github-pages bundle requires the 2.4.0 version of jekyll and won't run if you have a higher version.  The Poole howto says to run `jekyll server` but github pages prefers that you use bundle to serve the site `bundle exec jekyll server` if you want to recreate the github environment.

### Separate Account vs CNAME

I decided that a separate accounts for the chaoticbrain work would be wise, and I wanted to own the username, so I quick ran through Github's signup for chaoticbrain and the pushed my clone to chaoticbrain.github.io. 

Then I followed the info to get my domain connected:

* [github's domain setup](http://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/)
* [namecheap with github](http://davidensinger.com/2013/03/setting-the-dns-for-github-pages-on-namecheap/)

And tried to use it:
>Error 404.  

Ugh, now what.
Checking chaoticbrain's email shows that I forgot to verify the email address with github. 
After verifying my blog is now up and running. 

Yay.  Now what do I do with it?  






