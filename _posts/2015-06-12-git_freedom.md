---
layout: post
title: Git Freedom - Using git with a large svn repository
date:   2015-06-12
categories: git svn workflow
tags: git svn workflow

---

##History
Way back in early 2000's I was working with for a company that used Perforce for source code control.

Overall, Perforce is a decent platform for source control. It's significantly better than CSV or SVN anyway. But I always felt it had a deficiency:
I could only work on multiple things at once if they did **NOT** have overlapping changes at the file level.

I found myself wishing for the ability to temporarily hide my changes, and come back to them later. Having multiple environments was mostly not usable because of the time it took to setup the eclipse project I was working with. (That should be another blog post.) I came up with a few different options of copying changes away and re-applying them, but none ever worked that well.

So basically I gave up for the time being. Years go by and now I'm working with an SVN repository. But at the same time I'm responsible for projects using both mercurial and git. Learning git and mercurial I realize that these systems implement my dream workflow: Being able to stash away changes for one thing, do something else, and then come back to the changes that I had stashed away even if code overlaps. Layering git on top of my SVN server allows me to continue to use SVN but have the benefits of stashing and reapplying that git mercurial have.

There're multiple blog posts and how to use on how to use git-svn to pull in a whole SVN repository including branches etc. That's great but really none of them work from my scenario mainly because my SVN repository is huge. So the workflow I'm talking about today is very simple. I only check out one branch of my SVN repository and I only push back to the same branch. I do not check out the whole SVN repository or use the git-svn branching integration.


##Solution
 Mostly my solution is copied from this blog post:
[Using git-svn](http://www.janosgyerik.com/practical-tips-for-using-git-with-large-subversion-repositories/)

###Checking out the branch from svn:
 Most of the other git-svn tutorials will have you adding –T or –s or some other options to the git-svn clone command. All of these are if you are going to check out the whole repository. I'm not doing that so I have a nice clean git-svn clone command.

 **Note:** This will take a long time.


    git svn clone svn://user@svnserver/path/to/branch branch  

###Creating a new git branch for a bug.
 For reasons that aren't easy to find and are not clear. Every other git-svn tutorial states that you should never actually works in the master git-svn branch. You should always do work in a separate branch. I'm going to follow that principle.

    git checkout -b bug123  #Create branch bug123 and switch to it.


###Update branch from svn:
 While you're working on your code, other people are updating SVN. Every once in a while you need to bring those new changes into your working code. Here's how to do it.

    git checkout master     #Always svn update on master.
    git svn rebase          #Get latest svn changes.
    git checkout bug123     #Back to branch
    git rebase master       #Bring in new changes while keeping things clean.

###Bringing changes back to SVN and branch cleanup:
 To be able to send your new changes back to the SVN server you first have to merge your changes back into the master branch. Here's the workflow for doing that:

    git checkout master     #Prepair by following the update branch workflow.
    git svn rebase
    git checkout bug123
    git rebase master       #Branch is now up to date.
    git checkout master     #Switch back to master.
    git merge bug123        #This is the real work, merging your bug back into master.
    git svn dcommit         #Push all your newly integrated changes to svn.
    git checkout bug123     #Go back to your bug
    git rebase master       #This reconnects the bug  commits to svn so the history is a nice straight line.  
                            #If you want to keep using the branch for more work. you can stop here.
    git checkout master
    git branch -d bug123    #Delete the dead branch if you want to keep things clean.

  The workflow I've just described will keep all of your individual commits that you did within the branch. There is another/many other way(s) to do the merge from your branch back into master that allow you to squash all of your individual commits into a single large commit.  I simply prefer to keep all of my commits so that I have a full record of what happened even after I delete the branch.
