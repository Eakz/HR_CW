""" Node is defined as
class node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
"""

def sr_BST(root):
    if root is not None:
        out = []
        out += sr_BST(root.left)
        out.append(root.data)
        out += sr_BST(root.right)
        return out
    else:
        return [] 
        
def checkBST(root):
    ordered = sr_BST(root)
    return ordered == sorted(list(set(ordered)))