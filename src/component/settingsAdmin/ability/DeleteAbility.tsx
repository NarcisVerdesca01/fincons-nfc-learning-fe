import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Ability from "../../../models/AbilityModel";
import AbilityService from "../../../services/AbilityService";

const DeleteAbility = () => {
  const [abilities, setAblilities] = useState<Ability[]>([]);
  const [abilityId, setAbilityId] = useState<number | null>(null);
  const [ability, setAbility] = useState<Ability>();
  const navigate = useNavigate();

  useEffect(() => {
    AbilityService.getAbilities().then((res) => {
      setAblilities(res.data);
    });
  }, []);

  useEffect(() => {
    if (abilityId !== null) {
      AbilityService.getAbilityById(abilityId!).then((res) => {
        setAbility(res.data);
      });
    }
  }, [abilityId]);

  const DeleteAbility = () => {
    AbilityService.deleteAbility(abilityId!);
    navigate("/settings_admin");
  };

  const backToSettings = () => {
    navigate("/settings_admin");
  };

  return (
    <div>
      <div>
        <h3 className="titleModal">Delete Ability</h3>
        <div>
          <form>
            <div className="form-group">
              <label className="labelModal">Ability</label>
              <select
                name="course"
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => {
                  setAbilityId(Number(e.target.value));
                }}
              >
                <option selected>Select the Course to Delete</option>
                {abilities.map((ability) => {
                  return (
                    <option key={ability.id} value={ability.id}>
                      {ability.name}
                    </option>
                  );
                })}
              </select>
            </div>
            {ability && (
              <>
                <div>
                  <label className="labelModal">Name</label>
                  <p>{ability.name}</p>
                </div>
                <div className="containerButtonModal">
                  <button className="buttonCheck" onClick={DeleteAbility}>
                    <span className="frontCheck">
                      <i className="bi bi-check2"></i>
                    </span>{" "}
                  </button>
                  <button className="buttonReturn" onClick={backToSettings}>
                    <span className="frontReturn">
                      <i className="bi bi-arrow-left"></i>
                    </span>
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteAbility;
