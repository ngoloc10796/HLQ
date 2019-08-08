//package hlq.com.bean;
//
//import java.util.Collection;
//import java.util.List;
//import java.util.Objects;
//
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//
//import hlq.com.entitys.User;
//
//public class UserPrincipal implements UserDetails {
//	private static final long serialVersionUID = 1L;
//	private int id;
//
//	private String name;
//
//	private String username;
//
//	@JsonIgnore
//	private String email;
//
//	@JsonIgnore
//	private String password;
//
//	private Collection<? extends GrantedAuthority> authorities;
//
//	public UserPrincipal(int id, String name, String username, String email, String password,
//			Collection<? extends GrantedAuthority> authorities) {
//		this.id = id;
//		this.name = name;
//		this.username = username;
//		this.email = email;
//		this.password = password;
//		this.authorities = authorities;
//	}
//
//	public static UserPrincipal create(User user) {
//
//		List<GrantedAuthority> authorities = user.getAuthorities();
//		return new UserPrincipal(user.getId(), user.getName(), user.getUsername(), user.getEmail(), user.getPassword(),
//				authorities);
//	}
//
//	public int getId() {
//		return id;
//	}
//
//	public String getName() {
//		return name;
//	}
//
//	public String getEmail() {
//		return email;
//	}
//
//	@Override
//	public String getUsername() {
//		return username;
//	}
//
//	@Override
//	public String getPassword() {
//		return password;
//	}
//
//	@Override
//	public Collection<? extends GrantedAuthority> getAuthorities() {
//		return authorities;
//	}
//
//	@Override
//	public boolean isAccountNonExpired() {
//		return true;
//	}
//
//	@Override
//	public boolean isAccountNonLocked() {
//		return true;
//	}
//
//	@Override
//	public boolean isCredentialsNonExpired() {
//		return true;
//	}
//
//	@Override
//	public boolean isEnabled() {
//		return true;
//	}
//
//	@Override
//	public boolean equals(Object o) {
//		if (this == o)
//			return true;
//		if (o == null || getClass() != o.getClass())
//			return false;
//		UserPrincipal that = (UserPrincipal) o;
//		return Objects.equals(id, that.id);
//	}
//
//	@Override
//	public int hashCode() {
//
//		return Objects.hash(id);
//	}
//}