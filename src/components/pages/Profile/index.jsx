import styles from "./Profile.module.scss";
import { Outlet } from "react-router";
import { Row, Col } from "reactstrap";
import ProfileNavigation from "../ProfileNavigation";
export default function Profile() {
  return (
    <div className={`${styles.profile}`}>
      <Row className="h-100">
        <Col className="col-12 col-sm-5 col-md-3">
          <div className="p-0 pe-sm-4 pb-2 pb-sm-0">
            <ProfileNavigation />
          </div>
        </Col>
        <Col className="col-12 col-sm-7 col-md-9">
          <div className={styles.outlet}>
            <Outlet />
          </div>
        </Col>
      </Row>
    </div>
  );
}
