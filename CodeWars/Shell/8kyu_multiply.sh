# echo $(($1*$2))

#!/bin/bash -e
a=$1
b=$5
echo $((a*b))


# echo $( bc -l <<< "$1 * $2" )