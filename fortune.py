#02/17/23
#Billy Boone
#CS150 Assignment #5

print("Welcome to the Fortunagram! You will be asked a series"
      " of questions and recieve a fortune statement related to your answers.")
begin = input("Type 'start' to begin game:" )
user_num1 = int(input("Choose a whole number 1-7:" ))
user_let1 = str(input("Now choose lowercase letter for your number:" ))
list1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
list2 = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

if (user_num1 == 1) and (user_let1 in list1):
    print("You need to drink more water.")
elif (user_num1 == 2) and (user_let1 in list1):
    print("You should learn a new skill.")
elif (user_num1 == 3) and (user_let1 in list1):
    print("Great opportunity waits you, seize it!")
elif (user_num1 == 4) and (user_let1 in list1):
    print("Your actions speak louder than your words, walk it like you talk it.")
elif (user_num1 == 5) and (user_let1 in list1):
    print("Losing weight and gaining strenth is in your future.")
elif (user_num1 == 6) and (user_let1 in list1):
    print("Life is more than food and clothing, live in today and be content.")
elif (user_num1 == 7) and (user_let1 in list1):
    print("You should fix your posture.")
elif (user_num1 == 1) and (user_let1 in list2):
    print("Your  simple lifestyle will enable a happy existence.")
elif (user_num1 == 2) and (user_let1 in list2):
    print("Real possibilty of real estate in your future.")
elif (user_num1 == 3) and (user_let1 in list2):
    print("Your genuine care for others will benefit you greatly.")
elif (user_num1 == 4) and (user_let1 in list2):
    print("You will face triumph and tragedy, don't cry over spilt milk.")
elif (user_num1 == 5) and (user_let1 in list2):
    print("Blessings are in your future.")
elif (user_num1 == 6) and (user_let1 in list2):
    print("Don't hesitate on that thing, the time is now.")
elif (user_num1 == 7) and (user_let1 in list2):
     print("Your future is uncertain, best of luck.")
else:
    print("Try again later.")

