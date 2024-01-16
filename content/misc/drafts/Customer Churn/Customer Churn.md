---
title: 'Customer Churn'
subTitle: 'Identify customers that are most likely to churn'
category: 'Retail Analytics'
date: November 2023
headers:
  Cache-Control: max-age=86400
recommended: true

points:
  - 'As we incorporate data beyond financial statements to drive deal
    valuations, processing that data is becoming a large component of the due
    diligence life-cycle'
  - "Creating internal workflows to process data helps deal teams to quickly and
    confidently understand a target company's risk profile"
  - 'Understanding how to incorporate the results of these analyses into LBO
    models can shore up our confidence in offer prices'
---

Customer churn, a term used to describe when customers end their relationship
with a business, is a critical metric that impacts a company’s revenue and
growth. Effectively predicting and managing customer churn is essential, as
acquiring new customers often costs more than retaining existing ones. This post
explores the application of machine learning (ML) to identify customers who are
likely to churn. It's important to remember that while ML models can be a
powerful tool for predictions, they aren’t always perfect. This discussion also
covers managing the costs and implications of prediction errors, which is
crucial for any business strategy that involves using ML for decision-making.

Machine learning models, while powerful, aren’t infallible and often involve a
trade-off in terms of prediction accuracy. An important aspect of leveraging ML
is understanding and managing the relative costs associated with prediction
errors, particularly when it comes to the financial implications of using these
models for business decisions.

Consider the example of mobile operators, who typically have extensive
historical data regarding customer behavior. This data includes insights on
customers who eventually stopped using their services (churned) and those who
continued. By employing this historical data, we can train a machine learning
model to predict customer churn for a specific operator. The process involves
feeding the model with customer profile information similar to what was used
during its training. While the model’s predictions might not always be spot
on—predicting future behavior is inherently challenging—the key lies in
effectively handling and learning from these prediction errors.

The dataset used here for demonstration is publicly accessible, as highlighted
in Daniel T. Larose’s book “Discovering Knowledge in Data” (specifically, the
churn.txt file).

The data is relatively small, containing 3,333 records, but illustrative of a
typical dataset a manager will leverage to reduce customer churn. Each record
comprises 21 attributes that paint a detailed picture of a customer’s profile
from an undisclosed US mobile operator. These attributes provide a comprehensive
view of customer interactions and behaviors, serving as the foundation for
building an effective churn prediction model.

The key step in a churn model is to predict which customers are going to leave
and which customers are going to stay. Typically, we are most interested in
identifying which customers are going to leave. For example, if ten customers
are going to leave we usually would rather predict 11 out of 10 customers. In
other words, we accuratley predict all 10 customers are going to leave, but we
also predict one additional customer is going to leave who actually would not
leave. Conversely, we can predict nine out of ten customers accurately, and we
miss one customer (i.e. we predict they are going to maintain their relationship
but they terminate their relationship with the company). Often, it's less costly
to predict more customers are going to churn than less. But, we can always
adjust their accuracy metrics as needed.

Let's start by loading the data into Akila's Auto ML platform and generating
predictions. We will start to notice that the platform is very easy to use and
navigate. We don't need an understanding of machine learning. All we need, is an
understanding of our dataset and we can start driving insights into our
business.

In the image below, we can see we've input some basic information about our use
case like our project name and a job name for this specific dataset and
prediction. Then, we input some basic information like which column we want to
predict, and what are the numeric and categorical columns. After we input that
information, we can start generating predictions. As the predictions are being
generated, we can see status updates on how each model has performed. Once all
the models have been fit, we can view the output in the "Analyze Output"
section.
