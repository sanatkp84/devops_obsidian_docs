1. Branching Strategies (BEFORE)
	- Master: We can't do git add and commit in master branch until everything is tested....it is a protected branch. (Production Environment)
	- Staging: All testings are done here. After passing the test it will send to the prod env or convert that staging branch into production/master.
	- Development: All developer will pick the code from there and they will make changes in it. developer will pull the code from this branch and edit the code in feature branch belonging from that development branch.
	(NOW)
	- MASTER: Prd
	- STAGING: stg
	- DEVELOPMENT: dev
# HandsOn

## Step-1 : Initialize a Git Repo
```
# Create a new directory for your project
mkdir my_project
cd my_project

# Initialize a new Git repository
git init
```
## Step-2 : Create the Main Branch
```
# Create and switch to the main branch
git checkout -b main

# Make some changes, then commit
echo "Main branch content" > main_file.txt
git add main_file.txt
git commit -m "Initial commit on main branch"
```
## Step-3 : Create a Feature Branch
```
# Create and switch to a feature branch
git checkout -b feature_branch

# Make changes in the feature branch
echo "Feature branch content" > feature_file.txt
git add feature_file.txt
git commit -m "Add feature in feature branch"
```
## Step 4: Merge Feature Branch into Main
```
# Switch to the main branch
git checkout main

# Merge the feature branch into main
git merge feature_branch
```
## Step 5: Create a Release Branch
```
# Create and switch to a release branch
git checkout -b release_branch

# Perform release-specific changes
echo "Version 1.0" > version.txt
git add version.txt
git commit -m "Prepare for release 1.0"
```
## Step 6: Merge Release Branch into Main and Tag Release
```
# Switch to the main branch
git checkout main

# Merge the release branch into main
git merge release_branch

# Tag the release
git tag -a v1.0 -m "Version 1.0"
```
## Step 7: Hotfix on Main Branch
```
# Create and switch to a hotfix branch
git checkout -b hotfix_branch

# Fix a critical bug
echo "Hotfix content" > hotfix_file.txt
git add hotfix_file.txt
git commit -m "Fix critical bug in hotfix branch"

# Merge hotfix into main
git checkout main
git merge hotfix_branch
```

2. VCS Revert/Reset (When we introduce some bugs)

- Come to the Dev Branch (for do all these)
- make feature1.txt for a good commit
- then make feature2.txt for introducing a bug 
- Type the command to see all commits
```
git log --oneline
```
- So we dnt need to delete the feature2 file to remove the bug.
- we can revert it using the command `git revert <commit_id>`
- And this revert is also a commit itself.
### Use Git reset in case You have committed some security credentials or unwanted things
- You can use .gitignore file to ignore any file ( If you will add or commit something by mistakely then it will not add that file.)
```
vim .gitignore
```
- Add the unwanted or security file inside it.

3. Merge vs Rebase
- Rebase will show you the commits in linear fashion.
- After merging your any branch suppose dev branch to the main branch, it will show the commits like [MAIN--> 1-->2-->3------->6]. 
- It will skip the 4th and 5th commit which was done in the development branch of remote repository.
- Here the 1st 3 commits are done in the local branch. So to see the all commit history in details we use rebase.

```
git pull origin main --rebase
```

5. Cherry Pick/Stash