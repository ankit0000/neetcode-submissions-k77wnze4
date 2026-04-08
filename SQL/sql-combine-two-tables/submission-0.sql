-- Write your query below

select p.first_name, p.last_name,
a.city, a.state
from person as p
left join address as a on a.person_id=p.person_id;