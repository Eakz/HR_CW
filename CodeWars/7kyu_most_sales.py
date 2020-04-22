# You work in the best consumer electronics corporation, and your boss wants to find out which three products generate the most revenue. Given 3 lists of the same length like these:
#
#     products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
#     amounts: [3, 24, 8]
#     prices: [199, 299, 399]
#
# return the three product names with the highest revenue (amount * price).
#
# Note: if multiple products have the same revenue, order them according to their original positions in the input list.


def top3(products, amounts, prices):
    import numpy as np
    return [
        i for i, n in sorted(zip(products, np.multiply(amounts, prices)),
                             key=lambda x: x[1],
                             reverse=True)[:3]
    ]

#primitive but interesting pandas concept
# import pandas as pd
# def top3(products, amounts, prices):
#     df = pd.DataFrame({
#         'Product' : products,
#         'Amount' : amounts,
#         'Price' : prices})
#     df['Revenue']=df['Amount']*df['Price']
#     df.sort_values(by=['Revenue'], ascending=False,inplace=True)
#     product_sort = df['Product'].values.tolist()
#     return product_sort[0:3]



print(
    top3(["Computer", "Cell Phones", "Vacuum Cleaner"], [3, 24, 8],
         [199, 299, 399]))  #, ["Cell Phones", "Vacuum Cleaner", "Computer"])
print(
    top3([
        "Cell Phones", "Vacuum Cleaner", "Computer", "Autos", "Gold",
        "Fishing Rods", "Lego", " Speakers"
    ], [5, 25, 2, 7, 10, 3, 2, 24],
         [51, 225, 22, 47, 510, 83, 82, 124
          ]))  #, ['Vacuum Cleaner', 'Gold', ' Speakers'])
print(
    top3([
        "Cell Phones", "Vacuum Cleaner", "Computer", "Autos", "Gold",
        "Fishing Rods", "Lego", " Speakers"
    ], [0, 12, 24, 17, 19, 23, 120, 8],
         [9, 24, 29, 31, 51, 8, 120, 14]))  #, ['Lego', 'Gold', 'Computer']
