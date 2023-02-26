import { Formik, Form, Field } from "formik";
import { useAppDispatch } from "src/Redux/HooksTypes";
import { FilterType, getUserSearch } from "src/Redux/UsersFuncReducer";

type UsersSearchFormPropsType = {
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged?: any;
  portionSize?: number;
};

const UsersSearchForm: React.FC<UsersSearchFormPropsType> = (props) => {

  const dispatch = useAppDispatch();

  const onFilterChanged = (filter: FilterType) => {
    let currentPage = props.currentPage;
    let pageSizee = props.pageSize;
    dispatch(getUserSearch(currentPage, pageSizee, filter.term));
  };
  
  const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
  };

  const submit = (
    values: FilterType,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    onFilterChanged(values);
    setSubmitting(false);
  };

  const clearSearchForm = (filter: FilterType) => {
    let currentPage = 1
    let pageSizee = props.pageSize;
    dispatch(getUserSearch(currentPage, pageSizee, ""));
  }

  return (
    <div>
      <Formik
        initialValues={{ term: "" }}
        validate={usersSearchFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="term" className="form-outline"/>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              Найти
            </button>
            <button
              type="button"  //button type="button", а не type="submit", чтобы не вызывать повторное отправление формы.
              className="btn btn-secondary"
              onClick={() => clearSearchForm({ term: "" })}
            >
              Очистить
            </button>
            {/* <button type="button" className="btn btn-secondary" onClick="onFilterReset">Сброс</button> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UsersSearchForm;
