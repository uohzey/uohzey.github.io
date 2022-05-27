package main

type CategorySummary struct { 
    Title	     string
    Tasks       int
    AvgValue    float64
}

func createTables(db *sql.DB) {
    db.Exec("CREATE TABLE tasks (id INTEGER PRIMARY KEY, title TEXT, value INTEGER, category TEXT)")
}

func createCategorySummaries(db *sql.DB) ([]CategorySummary, error) {
	rows, err := db.Query("SELECT category, AVG(value) FROM tasks GROUP BY category")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var summaries []CategorySummary
	for rows.Next() {
		var summary CategorySummary
		err := rows.Scan(&summary.Title, &summary.AvgValue)
		if err != nil {
			return nil, err
		}
		summaries = append(summaries, summary)
	}
	return summaries, nil
}


