import './AvailableTests.css';
function AvailableTests() {
  const tests = ["ECG", "2D Echo", "Trophi", "RFT", "CBP", "TSH", "HbA1c"];

  const styles = {
    section: {
      padding: "40px 20px",
      backgroundColor: "#f9f9f9",
      textAlign: "center",
    },
    heading: {
      fontSize: "28px",
      marginBottom: "30px",
      color: "#2c3e50",
    },
    grid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
    },
    card: {
      backgroundColor: "#ffffff",
      border: "1px solid #ddd",
      borderRadius: "12px",
      padding: "20px 30px",
      fontSize: "18px",
      fontWeight: "500",
      color: "#333",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 18px rgba(0, 0, 0, 0.15)",
    },
  };

  return (
    <div style={styles.section}>
      <h2 style={styles.heading}>Available Tests at TRUST CARE</h2>
      <div style={styles.grid}>
        {tests.map((test, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseOver={(e) =>
              Object.assign(e.currentTarget.style, styles.cardHover)
            }
            onMouseOut={(e) =>
              Object.assign(e.currentTarget.style, styles.card)
            }
          >
            {test}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvailableTests;
