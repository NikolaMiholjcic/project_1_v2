import styles from "./Profile.module.scss";
import { Outlet } from "react-router";
import { Row, Col } from "reactstrap";
import ProfileNavigation from "../ProfileNavigation";
export default function Profile() {
  return (
    <div className={`${styles.profile}`}>
      <Row className="h-100">
        <Col className="col col-3">
          <div className={styles.navigation}>
            <ProfileNavigation />
          </div>
        </Col>
        <Col className="col col-9">
          <div className={styles.outlet}>
            <Outlet />
          </div>
        </Col>
      </Row>
    </div>
  );
}
