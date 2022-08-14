# we are doign this problem in python because its not in js on hacker rank
# Resources:
# https://docs.python.org/3/

# we import a library

from functools import cmp_to_key

# we declare our first class 'Player'
class Player:
    def __init__(self, name, score):
        # we intiliaze by assigning values
        # name is string
        # score is integer
        self.name = name
        self.score = score

    def __repr__(self):
        # we speacifically we define them
        self.name = ""
        self.score = 0

    def comparator(a, b):
        # if we have the same score
        if a.score == b.score:
            # sorted by ascending order
            if a.name > b.name:
                return 1
            else:
                return -1
        # sorted descending order
        if a.score > b.score:
            return -1
        else:
            return 1

# Hacker rank backup code
# Testing part on hackerrank

n = int(input())
data = []
for i in range(n):
    name, score = input().split()
    score = int(score)
    player = Player(name, score)
    data.append(player)
    
data = sorted(data, key=cmp_to_key(Player.comparator))
for i in data:
    print(i.name, i.score)