---
layout: post
title: Pyxnat - When removing features makes it better.
date:   2015-05-22
categories: Python XNAT
tags: python XNAT pyxnat

---

One of my responsibilities at work is to use and maintain the open source python library **[Pyxnat](https://pythonhosted.org/pyxnat/)**. Pyxnat makes working with [XNAT](http://www.xnat.org/) quite a bit easier than without having it.  A lot of people can thank the original developer Yannick Schwartz for all his hard work.  


## The feature (Caching)
One of pyxnat's original features was that of automatic request caching. This included downloaded files. The library uses md5 hashing to store requests into a *temporary* directory. It would also store any file you downloaded into this directory so you don't have to worry about download paths.

This all sounds good in theory, but in practice it has a number of issues:

## The problem (Many)

* Inconsistent results depending on timing: [discussion](https://groups.google.com/forum/#!searchin/xnat_discussion/pyxnat$20cache/xnat_discussion/4Jih3prvFoc/VimjU8iRCHsJ)
* The implementation of the cache would move files instead of duplicating if you used the wrong function.  So if you needed the file twice but used the wrong function the file would be moved from location A to location B and cause a workflow crash.
* Files were downloaded into memory and then written to disk. If you downloaded large files or more than a handful of files, python could crash with out of memory errors
* Bad performance if to many files are saved into the cache.  Every request was saved as a file into the cache folder, and before making a new request the cache would be crawled to see if it had been previously called.  

## The solution (Reqests)
Pyxnat uses httplib2 for it's http request handler. httplib2 is a fairly low level library that makes you do quite a bit of setup and teardown to use it. But it emphasizes caching early on, and that is probably why pyxnat included caching from the start.

Having said that, caching is one of those things that usually ends up being a premature optimization. It's also one of the two hard things about computer science:  Naming things, Cache invalidation, and Off-By-One errors.  

User group discussion lead to consensus that removing the caching functionality would benefit pyxnat greatly. I finally had the time to do just that.

### Enter Requests

The [Requests](http://docs.python-requests.org/) library is a very *Pythonic* library for dealing with http. It handles a lot of the ground work to make common things simple. Like session keep alive and authentication.

By replacing httplib2 with the requests library I was able to strip code related to session cooking handling, basic authentication handling, preemtive authentication and all the code related to caching.  

### What was lost
* Caching
* Use of /tmp during non-specified file downloads.  `get()` now saves files to `~/Downloads/` by default.


### What was gained
* Simplified code
* Convenience methods on the interface: get/put/post/delete
* More information in error messages
* Streaming file downloads
* Streaming file uploads

### What about backward compatibility
It should be backward compatible except where caching is involved.  If you were relying on the cache locations for something that code will have to change.

## Is it ready?
Probably. It passes all the same tests (and more) that the pyxnat - httplib version did. But I have only completed limited *real world* testing. So far there have been no surprises.

Most importantly, I have not had a chance to test the proxy support. If you use proxies your assistance in testing would be appreciated.  

## Where can I get this version?
I hope to merge these changes into the main pyxnat code eventually (after more testing), but for now, you can get it from my public repository: [pyxnat-requests](https://github.com/DavidJJ/pyxnat/tree/pyxnat-requests)
or use git:

    git clone -b pyxnat-requests https://github.com/DavidJJ/pyxnat.git pyxnat
    cd pyxnat
    pip install .
