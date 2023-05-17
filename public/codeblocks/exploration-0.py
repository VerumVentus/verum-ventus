import pandas as pd
import re
from scipy import stats

pd.set_option('display.max_columns', None)
github_raw = 'https://raw.githubusercontent.com/VerumVentus/twitter-scraper/main/group58.csv'
dataset = pd.read_csv(github_raw)
dataset.info()
