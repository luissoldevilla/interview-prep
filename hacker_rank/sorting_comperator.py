from functools import cmp_to_key
class Player:
    def __init__(self, name, score):
        # name is string
        # score is integer
        self.name = name
        self.score = score

    def __repr__(self):
        # we speacifically we define them
        self.name = ""
        self.score = 0

    def comparator(a, b):
        if a.score == b.score:
            if a.name > b.name:
                return 1
            else:
                return -1
        if a.score > b.score:
            return -1
        else:
            return 1

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