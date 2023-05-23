# Lab 8 - Starter

Nicholas Yousefi (I did not work with a partner)

## Check Your Understanding

### Question 1:

**Answer:** 1. Within a Github action that runs whenever code is pushed 

**Explanation:** You want to test your code often throughout your development process. You want to catch any bugs and fix them as soon as possible. The longer you leave bugs in the code, the more bugs show up and the harder it gets to fix them. Having the tests in a GitHub action helps to prevent code that does not meet the requirements from accidentally being pushed to the repo. This way, the code in the repo is always kept in a shippable state. Devs should not be expected to run tests manually before pushing code because they might forget (or skip that step due to a looming deadline or other pressures) and it wastes their time when they could be doing other things.

### Question 2:

**Answer:** No.

**Explanation:** End-to-end testing emulates user actions from start to finish as they interact with your website. They are used to make sure the general flow of the app works properly. Unit tests, not end-to-end test, are used to check that functions return the right outputs.

### Question 3:

**Answer:** No.

**Explanation:** The "message" feature is a user flow. It probably involves many units of code or functions working together. It is not small enough to be able to be tested efficiently using unit tests. It would be better suited to be tested by E2E testing, which is for testing user flows.

### Question 4:

**Answer:** Yes.

**Explanation:** The "max message length" feature of a messaging app is probably handled by only a small part of your code. Therefore, it would be appropriate to test it using a unit test.
