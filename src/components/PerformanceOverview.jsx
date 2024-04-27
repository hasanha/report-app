import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";

const PerformanceOverview = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="m-3 "
    >
      <Card className="m-3 ">
        <div className="performance-overview">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-3 m-2"
          >
            <h2>Performance Overview</h2>
            <p>
              We'll consider several factors: accuracy, precision, recall, F1
              score, and training time. These metrics give us a comprehensive
              view of each model's effectiveness and efficiency. - Accuracy: The
              proportion of true results (both true positives and true
              negatives) among the total number of cases examined. - Precision:
              The proportion of true positive results in the set of all samples
              that were identified as positive. - Recall (Sensitivity): The
              proportion of true positive results in the set of all samples that
              should have been identified as positive. - F1 Score: The harmonic
              mean of precision and recall, providing a single metric to assess
              the balance between them. - Training Time: How long it takes to
              train the model.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-3 m-2"
          >
            <h2>Model Comparisons</h2>
            <ol>
              <li className="mt-2">
                Bernoulli Naive Bayes
                <ul>
                  <li>Accuracy: 0.876</li>
                  <li>Precision: 0.88</li>
                  <li>Recall: 0.87</li>
                  <li>F1 Score: 0.87</li>
                  <li>Training Time: 4 minutes</li>
                </ul>
              </li>
              <li className="mt-2">
                Decision Tree
                <ul>
                  <li>Accuracy: 0.967</li>
                  <li>Precision: 0.967</li>
                  <li>Recall: 0.967</li>
                  <li>F1 Score: 0.967</li>
                  <li>Training Time: 3 seconds</li>
                </ul>
              </li>
              <li className="mt-2">
                XGBoost
                <ul>
                  <li>Accuracy: 0.967</li>
                  <li>Precision: 0.967</li>
                  <li>Recall: 0.967</li>
                  <li>F1 Score: 0.967</li>
                  <li>Training Time: 4 minutes</li>
                </ul>
              </li>
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="p-3 m-2"
          >
            <h2>Analysis</h2>
            <p className="ms-3">
              <b>Performance: </b> The Decision Tree and XGBoost models have the
              highest performance metrics across the board, with accuracy,
              precision, recall, and F1 scores all at 0.967. XGBoost is an
              ensemble of decision trees that uses gradient boosting to reduce
              bias and variance, which explains its high performance. However,
              it performs similarly to a single Decision Tree in this specific
              case, the identical performance of a single Decision Tree and
              XGBoost suggests that the dataset and the task might not be
              complex enough to benefit from the advanced features of XGBoost.
              This scenario exemplifies the concept of diminishing returns,
              where adding more complexity (in terms of a more sophisticated
              algorithm like XGBoost) does not yield a proportional improvement
              in performance over a simpler model (like a single Decision
              Tree).Logistic Regression shows a significant improvement over
              Bernoulli Naive Bayes, which indicates that the decision boundary
              for classifying the types of vehicles is likely not linearly
              separable with simple probabilities. LR, with its capability to
              handle linear relationships, outperforms BNB here. - Efficiency:
              In terms of training time, the Bernoulli Naive Bayes and Decision
              Tree models are the most efficient, with training times of 2
              seconds and 3 seconds, respectively. Logistic Regression and
              XGBoost, while having higher performance metrics, require
              significantly more training time (4 minutes each). BNB makes
              predictions based on the Bayes theorem with strong (naive)
              independence assumptions between the features, and DT splits the
              data on features that result in the most information gain. Both
              are less computationally intensive than LR and XGBoost. - Best
              Overall: Considering a balance between performance and efficiency,
              the Decision Tree model emerges as a strong contender, offering
              high accuracy, precision, recall, and F1 scores, with a very short
              training time.
            </p>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

export default PerformanceOverview;
