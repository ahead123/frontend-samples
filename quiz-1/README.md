## INSTRUCTIONS

Answer these questions:

- What will the effect and output of this script be?
# 10 setTimeout calls all fire at one time.

- What did the developer probably intend it to output?
# the index of i at 1 second intervals

- Why does it not do this?
# currently the function only has one scope for i so it executes i and setTimeout all at once

- How could you fix it to do that?
# create a separate self executing scope within the loop for i.