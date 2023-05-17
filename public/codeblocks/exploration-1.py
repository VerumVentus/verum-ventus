subset = dataset[['ID', 'Timestamp', 'Tweet URL',
                  'Account handle', 'Account name', 'Account bio',
                  'Account type', 'Joined', 'Following', 'Followers', 'Location', 'Tweet',
                  'Reasoning', 'Tweet Type', 'Date posted',
                  'Content type', 'Likes', 'Replies', 'Retweets',
                  'Quote Tweets', 'Satire vs Non-satire']].copy()

#  Columns removed:
# 'Group', 'Collector', 'Category', 'Topic',
# 'Keywords','Tweet Translated', 'Remarks', 'Screenshot',
# 'Views', 'Rating', 'Reviewer', 'Review'
subset.info()
