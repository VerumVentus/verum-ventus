subset[subset['Content type'].isna() == True]
subset['Content type'] = subset['Content type'].fillna('Emotional')

subset[subset['Account type'].isna() == True]
subset['Account type'] = subset['Account type'].fillna('Anonymous')

subset[subset['Tweet Type'].isna() == True]
subset['Tweet Type'] = subset['Tweet Type'].fillna('Text, Reply')
