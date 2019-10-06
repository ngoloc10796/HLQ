package hlq.com.entitys;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * The persistent class for the tour database table.
 * 
 */
@Entity
@NamedQuery(name = "Tour.findAll", query = "SELECT t FROM Tour t")
public class Tour implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private Integer adult;

	private Integer child;

	@Column(name = "client_attachment")
	private String clientAttachment;

	private String code;

	private String content;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "finish_at")
	private Date finishAt;

	@Column(name = "has_insurrance")
	private Integer hasInsurrance;

	private String image;

	@Column(name = "insurrance_attachment")
	private String insurranceAttachment;
	@Column(name = "limit_customer")
	private Integer limitCustomer;

	private Integer men;

	private String name;

	private String note;

	@Column(name = "price_child")
	private Float priceChild;

	@Column(name = "price_ppl")
	private Float pricePpl;

	private Integer room;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "start_at")
	private Date startAt;

	private Integer status;

	private Integer total;

	@Column(name = "total_price")
	private Float totalPrice;

	private Integer type;

	private Integer women;

	// bi-directional many-to-one association to Client
//	@OneToMany(mappedBy = "tour")
//	private List<Client> clients;

	// bi-directional many-to-one association to Agent
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "agentID", insertable = false, updatable = false)
	private Agent agent;

	@Column(name = "agentID")
	private BigInteger agentID;
	// bi-directional many-to-one association to ZCommuna
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "finish_stay")
	private ZCommuna ZCommuna1;

	// bi-directional many-to-one association to ZCommuna
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "start_stay")
	private ZCommuna ZCommuna2;

	@Column(name = "guild_id")
	private BigInteger guildId;

	// bi-directional many-to-one association to ZGuild
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "guild_id", insertable = false, updatable = false)
	private ZGuild ZGuild;

	// bi-directional many-to-one association to ZGuild
//	@OneToMany(mappedBy = "tour")
//	private List<ZGuild> ZGuilds;
//
//	// bi-directional many-to-one association to ZSchedule
//	@OneToMany(mappedBy = "tour")
//	private List<ZSchedule> ZSchedules;

	public Tour() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Integer getAdult() {
		return adult;
	}

	public void setAdult(Integer adult) {
		this.adult = adult;
	}

	public Integer getChild() {
		return child;
	}

	public void setChild(Integer child) {
		this.child = child;
	}

	public String getClientAttachment() {
		return clientAttachment;
	}

	public void setClientAttachment(String clientAttachment) {
		this.clientAttachment = clientAttachment;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getFinishAt() {
		return finishAt;
	}

	public void setFinishAt(Date finishAt) {
		this.finishAt = finishAt;
	}

	public Integer getHasInsurrance() {
		return hasInsurrance;
	}

	public void setHasInsurrance(Integer hasInsurrance) {
		this.hasInsurrance = hasInsurrance;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getInsurranceAttachment() {
		return insurranceAttachment;
	}

	public void setInsurranceAttachment(String insurranceAttachment) {
		this.insurranceAttachment = insurranceAttachment;
	}

	public ZGuild getZGuild() {
		return ZGuild;
	}

	public void setZGuild(ZGuild zGuild) {
		ZGuild = zGuild;
	}

	public Integer getMen() {
		return men;
	}

	public void setMen(Integer men) {
		this.men = men;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public Float getPriceChild() {
		return priceChild;
	}

	public void setPriceChild(Float priceChild) {
		this.priceChild = priceChild;
	}

	public Float getPricePpl() {
		return pricePpl;
	}

	public void setPricePpl(Float pricePpl) {
		this.pricePpl = pricePpl;
	}

	public Integer getRoom() {
		return room;
	}

	public void setRoom(Integer room) {
		this.room = room;
	}

	public Date getStartAt() {
		return startAt;
	}

	public void setStartAt(Date startAt) {
		this.startAt = startAt;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Integer getTotal() {
		return total;
	}

	public void setTotal(Integer total) {
		this.total = total;
	}

	public Float getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(Float totalPrice) {
		this.totalPrice = totalPrice;
	}

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public Integer getWomen() {
		return women;
	}

	public void setWomen(Integer women) {
		this.women = women;
	}

	public BigInteger getAgentID() {
		return agentID;
	}

	public void setAgentID(BigInteger agentID) {
		this.agentID = agentID;
	}

	public BigInteger getGuildId() {
		return guildId;
	}

	public void setGuildId(BigInteger guildId) {
		this.guildId = guildId;
	}

//	public List<Client> getClients() {
//		return this.clients;
//	}
//
//	public void setClients(List<Client> clients) {
//		this.clients = clients;
//	}

//	public Client addClient(Client client) {
//		getClients().add(client);
//		client.setTour(this);
//
//		return client;
//	}

//	public Client removeClient(Client client) {
//		getClients().remove(client);
////		client.setTour(null);
//		return client;
//	}

//	public Agent getAgent() {
//		return this.agent;
//	}
//
//	public void setAgent(Agent agent) {
//		this.agent = agent;
//	}

//	public ZCommuna getZCommuna1() {
//		return this.ZCommuna1;
//	}
//
//	public void setZCommuna1(ZCommuna ZCommuna1) {
//		this.ZCommuna1 = ZCommuna1;
//	}
//
//	public ZCommuna getZCommuna2() {
//		return this.ZCommuna2;
//	}
//
//	public void setZCommuna2(ZCommuna ZCommuna2) {
//		this.ZCommuna2 = ZCommuna2;
//	}
//
//	public ZGuild getZGuild() {
//		return this.ZGuild;
//	}
//
//	public void setZGuild(ZGuild ZGuild) {
//		this.ZGuild = ZGuild;
//	}

//	public List<ZGuild> getZGuilds() {
//		return this.ZGuilds;
//	}
//
//	public void setZGuilds(List<ZGuild> ZGuilds) {
//		this.ZGuilds = ZGuilds;
//	}

//	public ZGuild addZGuild(ZGuild ZGuild) {
//		getZGuilds().add(ZGuild);
//		ZGuild.setTour(this);
//
//		return ZGuild;
//	}

//	public ZGuild removeZGuild(ZGuild ZGuild) {
//		getZGuilds().remove(ZGuild);
//		ZGuild.setTour(null);
//
//		return ZGuild;
//	}

//	public List<ZSchedule> getZSchedules() {
//		return this.ZSchedules;
//	}
//
//	public void setZSchedules(List<ZSchedule> ZSchedules) {
//		this.ZSchedules = ZSchedules;
//	}

//	public ZSchedule addZSchedule(ZSchedule ZSchedule) {
//		getZSchedules().add(ZSchedule);
//		ZSchedule.setTour(this);
//
//		return ZSchedule;
//	}

//	public ZSchedule removeZSchedule(ZSchedule ZSchedule) {
//		getZSchedules().remove(ZSchedule);
//		ZSchedule.setTour(null);
//
//		return ZSchedule;
//	}

}