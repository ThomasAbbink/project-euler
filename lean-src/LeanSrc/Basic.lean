def hello := "world"
#eval String.append "Hello, "  (String.append "Lean" "tree ")
#eval String.append "it is " (if 1> 2 then "yes" else "no")
#eval (10 - 20: Int)

 def hello2 : String := "Hello"
 #eval String.append hello hello2

 def add2 (n: Nat) :Nat := n + 2
 #eval add2 35
