import React, { useContext } from "react";
import { Button } from "reactstrap";
import AddMeal from "../components/AddMeal";
import AdminSignUp from "../components/AdminSignUp";
import SessionContext from "../contexts/SessionContext";
import HomePage from "../pages/HomePage";

const cookitLogo =
  "https://lh3.googleusercontent.com/KGNjoAJbIQVOFXvy5pLfmXd9hQMLE4uf44f8DXwmeuURBqywHPd2usIjlQRYgfPzDGU-c4-eBQ0bngdFFBm0GTBdPSxwixOK2ugQFJPVzdwvCl_tDgfAe8ocfqCOpUp3-ab39nKQ_JP-vnkOI8_aC8txUJucVsS3hAvoqQxSMEYEG7yRykQebrK_ogKLvq8AhPtWDQIJ-v-RTz3KebUKNns06YL42nvPHw2PDKER4dAUsdIwmu5WvCbVnP3ZRBMwzCPGrnZiXx1tyrKFBXlJbxwkL0Ih959roDt7lI7sJxPhe7ak6EmvXUipSWoIzSSDXPu3jAQ8ztmMgEhh7fZRpmYnY4rYdTSscFWV1N-gwPKJH5gzpoNkQOlboR7nNsnBMnzDBenzT2f4JU1O3qLpNpbrCN9fL-iwt1hYs-pUfpLIXvB2viNlAY6FiBrXOFkczXTJiWVNvdzXseIdo841REwDfZwEOJ6otSVmJ1wtKo7Q3C3IOil2-S58309uluAJEApE4n77gdNPK4AE4HTxAUuVm3JDpVUp0c5TitcUO2SO6rc7NrLaogRVXALFGWxmZjrIw6ju5RFcHueUM5op-IVzKw3qD-WZxNhR5nGq1U7RIQauxOh9kE0aCJKifyZOkkt4Y4dNmLO-3CvUohuFqWHa3pXw_QgaTDXBCKAsDU58VlcNsw-FKs0CAyE=w250-h233-no?authuser=0";

export default function AdminPage() {
  const { toggleAdminSignUpModal, toggleShowAddMealModal } = useContext(
    SessionContext
  );
  return (
    <div style={{ marginBottom: "20%" }}>
      <div
        style={{
          paddingBottom: "2%",
          paddingTop: "11%",
          backgroundColor: "#ff914d",
          borderBottom: "3px solid white",
          opacity: "0.8",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "white" }}>Cookit Admin Area</h1>
        <span
          style={{ fontSize: "280%", marginRight: "2%", marginBottom: "2%" }}
          class="iconify"
          data-icon="emojione:locked-with-key"
          data-inline="false"
        ></span>
        <AddMeal />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            style={{ marginRight: "2%", border: "1px solid white" }}
            onClick={() => toggleShowAddMealModal()}
          >
            Add New Meal
          </Button>
          <AdminSignUp />
          <Button
            style={{ border: "1px solid white" }}
            // style={{ marginBottom: "4%" }}
            onClick={() => toggleAdminSignUpModal()}
          >
            Sign Up New Admin
          </Button>
        </div>
      </div>
      <HomePage style={{ borderTop: "3px solid orange", marginBottom: "1%" }} />
    </div>
  );
}
