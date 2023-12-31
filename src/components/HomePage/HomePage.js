import React from "react";
import axios from "axios";
import Chart from "chart.js";
import { change } from "./d3chart.js";
import * as d3 from "d3-3";

function HomePage() {
  var dataSource = {
    datasets: [
      {
        data: [],
        backgroundColor: [
          "#ffcd56",
          "#ff6384",
          "#36a2eb",
          "#fd6b19",
          "#41c92c",
          "#7452ff",
          "#63dbd9",
        ],
      },
    ],
    labels: [],
  };

  function createChart() {
    var ctx = document.getElementById("myChart").getContext("2d");
    new Chart(ctx, {
      type: "pie",
      data: dataSource,
    });
  }

  function getBudget() {
    axios.get("http://localhost:3002/budget").then((res) => {
      for (var i = 0; i < res.data.myBudget.length; i++) {
        dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
        dataSource.labels[i] = res.data.myBudget[i].title;
        createChart();
      }
      change(
        res.data.myBudget.map((item) => {
          return { label: item.title, value: item.budget };
        }),
        d3
      );
    });
  }

  getBudget();

  // This is an A11y Change (#2, added tabindex attribute to ensure skip link works correctly for tab key)
  return (
    <main className="center" id="main" tabIndex="-1">
      <div className="page-area">
        <article>
          {/* This is a Semantic HTML Change (#2, changed h1 to h2 to fix top-level headings with modified CSS) */}
          <h2>Stay on track</h2>
          <p>
            Do you know where you are spending your money? If you really stop to
            track it down, you would get surprised! Proper budget management
            depends on real data... and this app will help you with that!
          </p>
        </article>

        <article>
          {/* This is a Semantic HTML Change (#2, changed h1 to h2 to fix top-level headings with modified CSS) */}
          <h2>Alerts</h2>
          <p>
            What if your clothing budget ended? You will get an alert. The goal
            is to never go over the budget.
          </p>
        </article>

        <article>
          {/* This is a Semantic HTML Change (#2, changed h1 to h2 to fix top-level headings with modified CSS) */}
          <h2>Results</h2>
          <p>
            People who stick to a financial plan, budgeting every expense, get
            out of debt faster! Also, they to live happier lives... since they
            expend without guilt or fear... because they know it is all good and
            accounted for.
          </p>
        </article>

        <article>
          {/* This is a Semantic HTML Change (#2, changed h1 to h2 to fix top-level headings with modified CSS) */}
          <h2>Free</h2>
          <p>This app is free!!! And you are the only one holding your data!</p>
        </article>

        <article>
          {/* This is a Semantic HTML Change (#2, changed h1 to h2 to fix top-level headings with modified CSS) */}
          <h2>Stay on track</h2>
          <p>
            Do you know where you are spending your money? If you really stop to
            track it down, you would get surprised! Proper budget management
            depends on real data... and this app will help you with that!
          </p>
        </article>

        <article>
          {/* This is a Semantic HTML Change (#2, changed h1 to h2 to fix top-level headings with modified CSS) */}
          <h2>Alerts</h2>
          <p>
            What if your clothing budget ended? You will get an alert. The goal
            is to never go over the budget.
          </p>
        </article>

        <article>
          {/* This is a Semantic HTML Change (#2, changed h1 to h2 to fix top-level headings with modified CSS) */}
          <h2>Results</h2>
          <div className="graph">
            <span className="d3chart"></span>
          </div>
          <p>
            People who stick to a financial plan, budgeting every expense, get
            out of debt faster! Also, they to live happier lives... since they
            expend without guilt or fear... because they know it is all good and
            accounted for.
          </p>
        </article>

        <article>
          {/* This is a Semantic HTML Change (#2, changed h1 to h2 to fix top-level headings with modified CSS) */}
          <h2>Chart</h2>
          {/* This is an A11y Change (#3, added figure element with caption to support screen readers) */}
          <figure>
            <canvas id="myChart" width="400" height="400"></canvas>
            <figcaption id="chartdesc">Figure caption for my chart.</figcaption>
          </figure>
        </article>
      </div>
    </main>
  );
}

export default HomePage;
