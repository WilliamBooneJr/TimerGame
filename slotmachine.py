#Billy Boone
#03/04/23
#CS150
#Slot machine that incorporates while loop.

import random #import random number generator for slot machine


user_text = input("Enter 'start' to begin slot machine: ")

while user_text != 'n':  #specifies sentinel
    num1 = random.randint(0, 9)
    num2 = random.randint(0, 9)
    num3 = random.randint(0, 9)
    print(num1, num2, num3)
    if (num1 == num2 == num3):    #conditional for jackpot
        print('Jackpot')
    if (num1 == num2) or (num1 == num3) or (num2 == num3): #conditional for 2 pair
        print('Matched 2')
    else:
        print('Sorry you lost')
    user_text = input("Play again? Type 'y' or 'n': ") #option to play again or exit loop

print('Better luck next time.')
        
        
    
    
