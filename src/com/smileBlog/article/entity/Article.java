package com.smileBlog.article.entity;

import com.smileBlog.comment.entity.Comment;

import java.util.Date;
import java.util.List;

/**
 * Created by asus on 2017/6/3.
 */
public class Article
{
	private int aid;
	private int ownuid;
	private String ownNickname;
	private String title;
	private String content;
	private String contentTxt;
	private int status;
	private Date createTime;
	private List<Comment> commentList;
	private int collectionNumber;
	private int likeNumber;
	private int commentNumber;

	public int getAid()
	{
		return aid;
	}

	public void setAid(int aid)
	{
		this.aid = aid;
	}

	public int getOwnuid()
	{
		return ownuid;
	}

	public void setOwnuid(int ownuid)
	{
		this.ownuid = ownuid;
	}

	public String getOwnNickname()
	{
		return ownNickname;
	}

	public void setOwnNickname(String ownNickname)
	{
		this.ownNickname = ownNickname;
	}

	public String getTitle()
	{
		return title;
	}

	public void setTitle(String title)
	{
		this.title = title;
	}

	public String getContent()
	{
		return content;
	}

	public void setContent(String content)
	{
		this.content = content;
	}

	public String getContentTxt()
	{
		return contentTxt;
	}

	public void setContentTxt(String contentTxt)
	{
		this.contentTxt = contentTxt;
	}

	public int getStatus()
	{
		return status;
	}

	public void setStatus(int status)
	{
		this.status = status;
	}

	public int getCollectionNumber()
	{
		return collectionNumber;
	}

	public void setCollectionNumber(int pageView)
	{
		this.collectionNumber = pageView;
	}

	public Date getCreateTime()
	{
		return createTime;
	}

	public void setCreateTime(Date createTime)
	{
		this.createTime = createTime;
	}

	public List<Comment> getCommentList()
	{
		return commentList;
	}

	public void setCommentList(List<Comment> commentList)
	{
		this.commentList = commentList;
	}

	public int getLikeNumber()
	{
		return likeNumber;
	}

	public void setLikeNumber(int likeNumber)
	{
		this.likeNumber = likeNumber;
	}

	public int getCommentNumber()
	{
		return commentNumber;
	}

	public void setCommentNumber(int commentNumber)
	{
		this.commentNumber = commentNumber;
	}
}
